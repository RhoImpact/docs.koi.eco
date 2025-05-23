'use client'

import { forwardRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

async function postToSlack(message: string) {
  try {
    let userUUID = localStorage.getItem("userUUID") || 'anonymous';
    const messageWithUUID = `${message} - User UUID: ${userUUID}`;
    const response = await fetch('/.netlify/functions/postToSlack', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: messageWithUUID }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error posting:', error);
  }
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

function FeedbackButton(
  props: Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'className'>,
) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

const FeedbackForm = forwardRef<
  React.ElementRef<'form'>,
  React.ComponentPropsWithoutRef<'form'>
>(function FeedbackForm({ onSubmit, className, ...props }, ref) {
  return (
    <form
      {...props}
      ref={ref}
      onSubmit={onSubmit}
      className={clsx(
        className,
        'absolute inset-0 flex items-center justify-center gap-6 md:justify-start',
      )}
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-zinc-900/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  )
})

const FeedbackThanks = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(function FeedbackThanks({ className, ...props }, ref) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'absolute inset-0 flex justify-center md:justify-start',
      )}
    >
      <div className="flex items-center gap-3 rounded-full bg-cyan-50/50 py-1 pl-1.5 pr-3 text-sm text-cyan-900 ring-1 ring-inset ring-cyan-500/20 dark:bg-cyan-500/5 dark:text-cyan-200 dark:ring-cyan-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-cyan-500 stroke-white dark:fill-cyan-200/20 dark:stroke-cyan-200" />
        Thanks for your feedback!
      </div>
    </div>
  )
})

export function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const submitEvent = event.nativeEvent as SubmitEvent
    const response = submitEvent.submitter?.dataset.response
    const currentPage = window.location.href
    postToSlack(`User Feedback (Helpful?): ${response}, From Page: ${currentPage}`)

    setSubmitted(true)

    // Revert to original state after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="relative h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-[leave]:pointer-events-none data-[closed]:opacity-0"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-[closed]:opacity-0" />
      </Transition>
    </div>
  )
}

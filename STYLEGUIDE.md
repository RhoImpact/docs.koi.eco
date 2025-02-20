# Koi Documentation Style Guide

## Purpose  
Welcome to the Koi Documentation Style Guide!
This guide helps keep our docs clear, accurate, and easy to navigate for investors, innovators, and developers.  

Our customers tend to be **experts in their fields**, but they **may not be specialists in impact forecasting**.
We don’t assume prior knowledge, and we always link to helpful resources when needed.  

### Our Perspective:
- Our climate is changing and we need everyone, including the world's capital, to support the brilliant and motivated minds of climate innovators.
  - Unfortunately, assaults on basic logic and decency compel us to state this plainly.
- Solutions are wide ranging across mitigation, adaptation, resilience, including both technical and process-oriented innovations.
- All forecasts are a guess. We focus on consistency in applying methodologies and transparency in our processes and assumptions.
- We will constantly strive to state objective facts, correct ourselves when we're wrong, and learn from the wonderful world of collaborators out there!
- 🐟 And hey, if we can work in the occasional fish pun without muddying the waters, why not?

## Writing Principles  

### 1. Keep It Flowing (Clarity & Conciseness)  
- Focus on clarity and conciseness.  
- Avoid jargon unless it’s essential—when in doubt, define it or link to a resource.  
- Try to use visual examples to illustrate key points without over-explaining.  

### 2. Precision Matters (Capitalization, Units & Accuracy)  
- **Units & Capitalization:**  
  - There's a big difference between **Mt** and **mt**, for example. Pay attention to the little details, including capitalization.
- **Acronyms:**  
  - Spell out on first use, then stick to the acronym.  
  - Example: *Tonnes of Carbon Dioxide Equivalent (tCO₂e) is a standard unit of measurement for comparing the climate impact of different greenhouse gases. The amount of tCO₂e is...*  
- **Say what’s real, skip what’s vague.**  
  - Instead of "significant emissions reductions," say **"a 40% reduction in CO₂ emissions over 10 years."**  

### 3. No Talking Down, No Talking Over  
- Assume your audience is intelligent and eager to learn. They may not be experts in **this** stuff, though, so help them out.
- Use an approachable, professional tone.

## Formatting & Style  

### Headings & Capitalization  
- Use **Capital Case**:  
  - ✅ *Avoided Emissions Methodology*  
  - ❌ *Avoided emissions methodology*  

### Numbers & Units  
- Use numerals
  - ✅ *5%*  
  - ❌ *five percent*  
- Always include units when discussing data
  - ✅ *500 MtCO₂e*  
  - ❌ *500*  

### Links & References  
- Always provide links instead of assuming readers know a concept.  
    - Example: *For more on the GHG Protocol, see [this guide](https://ghgprotocol.org/).*  

### Code & Formatting  
- Inline code snippets: `` `backticks` ``  
- Multi-line code blocks:  
  ```python  
  def reduce_emissions(emissions: float, net_zero_factor: float) -> float:
    """
    Calculate the reduction in emissions by applying a magical net zero factor!
    Args:
        emissions (float): The amount of emissions that exist before the reduction.
        net_zero_factor (float): The net zero factor to apply.
    Returns:
        float: The reduced emissions.
    """
    return emissions * net_zero_factor
  ```

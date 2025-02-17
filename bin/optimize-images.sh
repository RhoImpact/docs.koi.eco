#!/bin/bash

# To use this script, run the following command:
# ./bin/optimize-images.sh -d <directory>
#
# Required dependencies:
# - cwebp
# - gif2webp
# e.g. brew install webp

PARAMS=('-m 6 -q 70 -mt -af -progress')
DIRECTORY=$(pwd)  # Default to current directory

# Parse options
while getopts ":d:" opt; do
  case $opt in
    d) DIRECTORY="$OPTARG" ;;
    \?) echo "Invalid option -$OPTARG" >&2; exit 1 ;;
  esac
done

echo "Optimizing images in $DIRECTORY"

# Shift to remove parsed options from the positional parameters
shift $((OPTIND -1))

# If there are additional parameters, use them
if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd "$DIRECTORY" || exit

shopt -s nullglob nocaseglob extglob

for FILE in *.@(jpg|jpeg|tif|tiff|png); do 
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
done

# Add support for GIFs
for FILE in *.gif; do
    gif2webp "$FILE" -o "${FILE%.*}".webp;
done
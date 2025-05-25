#!/bin/bash

# List of shadcn-ui components you want to install
components=(
  button
  input
  dialog
  breadcrumb
  card
  tabs,
  popover,
  navigation-menu
)

echo "Installing shadcn-ui components..."

for component in "${components[@]}"
do
  echo "Installing: $component"
  npx shadcn@latest add "$component"
done

echo "✅ All selected components installed."

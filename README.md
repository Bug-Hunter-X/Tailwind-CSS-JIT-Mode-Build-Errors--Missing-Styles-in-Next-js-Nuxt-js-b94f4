# Tailwind CSS JIT Mode Build Errors in Next.js/Nuxt.js

This repository demonstrates a common bug encountered when using Tailwind CSS's Just-In-Time (JIT) mode with build processes such as those used by Next.js and Nuxt.js.

## Problem

In some cases, Tailwind's JIT mode may fail to generate the required CSS during the build process. This typically results in missing styles or unexpected rendering behavior, especially when adding or modifying components.

## Solution

The solutions usually involve correctly configuring your Tailwind setup in your framework, ensuring all files that use Tailwind classes are properly processed during the build process, and potentially adding explicit imports to use the generated CSS.
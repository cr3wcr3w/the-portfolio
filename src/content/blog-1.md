---
title: Introduction to Bash
description: This is a short summary of my first blog post.
date: 2025-12-20
tags: [bash, scripting]
---

# Introduction to Bash

---

## vscode

- shellcheck
- shell-format
- shellman
- bash debug

## commands

- `ls`: List files and directories.
- `cd`: Change directory.
- `pwd`: Print working directory.
- `cp`: Copy files or directories.
- `mv`: Move or rename files or directories.
- `rm`: Remove files or directories.
- `echo`: Print text to the terminal.
- `cat`: Concatenate and display file contents.
- `grep`: for searching plain-text
- `|`: send the output of one command directly into another command as input.
- `cut`: extract specific columns.
- `tr`: used to translate, replace, or delete characters from standard input.

---

## script

```bash
#!/bin/bash
echo "shibang"

# chmod +x sample.sh
```

## variables

```bash
# variables
name="John"
echo "Hello, $name!"
echo ${name}

# capital case
echo ${name^^}

# lower case
echo ${name..}

#
echo name:0 # J
echo name:0:1 # Jo
```

## if statements

```bash
if [ "$name" == "John" ]; then
    echo "Welcome, John!"
else
    echo "Who are you?"
fi
```

## loop

```bash
for i in {1..5}; do
    echo "Number: $i"
done
```

## functions

```bash
function greet {
    echo "Hello, $1!"
}

greet "Alice"
```

```bash
# Function definition with parameters
function greet {
    # $1 is the first parameter, $2 is the second, etc.
    echo "Hello, $1! You are visitor number $2."
}

# Calling the function with parameters
greet "Alice" 1
greet "Bob" 2
```

## arithmetic pperations

```bash
# Addition
sum=$(expr 5 + 3)
echo "Sum: $sum"  # Output: Sum: 8

# Subtraction
difference=$(expr 5 - 3)
echo "Difference: $difference"  # Output: Difference: 2

# Multiplication
product=$(expr 5 \* 3)
echo "Product: $product"  # Output: Product: 15

# Division
quotient=$(expr 5 / 2)
echo "Quotient: $quotient"  # Output: Quotient: 2

# Modulus
remainder=$(expr 5 % 2)
echo "Remainder: $remainder"  # Output: Remainder: 1
```

```bash
# Using double parentheses for arithmetic
sum=$((5 + 3))
echo "Sum: $sum"  # Output: Sum: 8

difference=$((5 - 3))
echo "Difference: $difference"  # Output: Difference: 2

product=$((5 * 3))
echo "Product: $product"  # Output: Product: 15

quotient=$((5 / 2))
echo "Quotient: $quotient"  # Output: Quotient: 2

remainder=$((5 % 2))
echo "Remainder: $remainder"  # Output: Remainder: 1
```

## expression with `..`

```bash
# Print numbers from 1 to 5
for i in {1..5}; do
    echo "$i"
done
```

```bash
# Generate IP addresses
echo 192.168.1.{1..10}
```

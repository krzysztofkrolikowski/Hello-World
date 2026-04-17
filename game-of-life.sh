#!/usr/bin/env bash
# Conway's Game of Life — terminal edition
# Usage: ./game-of-life.sh [rows] [cols] [delay]

set -euo pipefail

ROWS="${1:-20}"
COLS="${2:-40}"
DELAY="${3:-0.15}"

declare -a grid next

idx() { echo $(( $1 * COLS + $2 )); }

init_grid() {
  for (( i = 0; i < ROWS * COLS; i++ )); do
    grid[i]=$(( RANDOM % 4 == 0 ? 1 : 0 ))
  done
}

count_neighbors() {
  local r=$1 c=$2 count=0
  for dr in -1 0 1; do
    for dc in -1 0 1; do
      [[ $dr -eq 0 && $dc -eq 0 ]] && continue
      local nr=$(( (r + dr + ROWS) % ROWS ))
      local nc=$(( (c + dc + COLS) % COLS ))
      (( count += grid[$(idx $nr $nc)] ))
    done
  done
  echo $count
}

step() {
  for (( r = 0; r < ROWS; r++ )); do
    for (( c = 0; c < COLS; c++ )); do
      local i; i=$(idx $r $c)
      local n; n=$(count_neighbors $r $c)
      local alive=${grid[$i]}
      if (( alive == 1 )); then
        next[i]=$(( n == 2 || n == 3 ? 1 : 0 ))
      else
        next[i]=$(( n == 3 ? 1 : 0 ))
      fi
    done
  done
  for (( i = 0; i < ROWS * COLS; i++ )); do
    grid[i]=${next[i]}
  done
}

render() {
  local gen=$1
  local buf=""
  buf+="\033[H"  # move cursor home
  buf+="  🧬 Conway's Game of Life  |  Gen: ${gen}  |  ${ROWS}×${COLS}  |  Ctrl-C to quit\n"
  buf+="  ┌"
  for (( c = 0; c < COLS; c++ )); do buf+="─"; done
  buf+="┐\n"
  for (( r = 0; r < ROWS; r++ )); do
    buf+="  │"
    for (( c = 0; c < COLS; c++ )); do
      local i; i=$(idx $r $c)
      if (( grid[i] == 1 )); then
        buf+="█"
      else
        buf+=" "
      fi
    done
    buf+="│\n"
  done
  buf+="  └"
  for (( c = 0; c < COLS; c++ )); do buf+="─"; done
  buf+="┘\n"
  printf '%s' "$buf"
}

cleanup() {
  tput cnorm 2>/dev/null  # show cursor
  echo ""
  echo "  Simulation ended. Thanks for watching! 👋"
  exit 0
}

trap cleanup INT TERM

# Main
printf "\033[2J"  # clear screen
tput civis 2>/dev/null  # hide cursor
init_grid

gen=0
while true; do
  render $gen
  sleep "$DELAY"
  step
  (( gen++ ))
done

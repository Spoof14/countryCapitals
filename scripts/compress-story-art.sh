#!/usr/bin/env bash
set -euo pipefail

ART_DIR="$(cd "$(dirname "$0")/../public/story-art" && pwd)"
THRESHOLD_KB=300

compress_file() {
  local file="$1"
  local size_kb
  size_kb=$(du -k "$file" | cut -f1)
  if (( size_kb <= THRESHOLD_KB )); then
    return 0
  fi
  local tmp="${file}.tmp.jpg"
  ffmpeg -y -loglevel error -i "$file" \
    -vf "scale=1200:675:force_original_aspect_ratio=increase,crop=1200:675" \
    -q:v 5 "$tmp"
  mv "$tmp" "$file"
  echo "Compressed $(basename "$file") (${size_kb}KB -> $(du -k "$file" | cut -f1)KB)"
}

count=0
for file in "$ART_DIR"/*.jpg; do
  [[ -f "$file" ]] || continue
  size_kb=$(du -k "$file" | cut -f1)
  if (( size_kb > THRESHOLD_KB )); then
    compress_file "$file"
    count=$((count + 1))
  fi
done

echo "Compressed $count files in $ART_DIR"
du -sh "$ART_DIR"

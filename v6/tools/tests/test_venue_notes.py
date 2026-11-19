"""Removed slide copy must survive actual PowerPoint notes as plain text, including placeholders."""
import importlib.util
from pathlib import Path
spec=importlib.util.spec_from_file_location('venue_pptx',Path(__file__).parents[1]/'venue_pptx.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
raw='⏱ ~30s.\n\nOriginal on-slide copy:\nShot by <YOUR NAME>\nA &amp; B<br>Second line\n'+('Original explanation. '*100)
assert m.stage_notes(raw)==raw
print('PASS: complete original text, literal placeholders, entities and long notes retained')

from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root=Path('dist').resolve()
class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.ids=set()
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])

pages={p:Links() for p in root.rglob('*.html')}
for p, parser in pages.items(): parser.feed(p.read_text(encoding='utf-8'))
errors=[]
for p, parser in pages.items():
    for href in parser.links:
        u=urlsplit(href)
        if u.scheme or u.netloc or not u.path and not u.fragment: continue
        target=(root / unquote(u.path).lstrip('/')) if u.path.startswith('/') else (p.parent / unquote(u.path)) if u.path else p
        if target.is_dir(): target=target/'index.html'
        if not target.exists(): errors.append(str(p.relative_to(root))+': '+href)
        elif u.fragment and target.suffix=='.html' and target in pages and unquote(u.fragment) not in pages[target].ids: errors.append(str(p.relative_to(root))+': missing anchor '+href)
assert not errors, '\n'.join(errors[:30])
print(f'Internal link checks passed across {len(pages)} generated HTML pages.')


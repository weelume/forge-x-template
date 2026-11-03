import test from 'node:test'
import assert from 'node:assert/strict'
import {readFile,access} from 'node:fs/promises'
import {createHash} from 'node:crypto'
const root=new URL('../',import.meta.url)
const metadata=JSON.parse(await readFile(new URL('.tpl/template.json',root),'utf8'))
test('完整双语页面路径唯一',()=>{const pages=metadata.surfaces[0].pages;assert.equal(pages.length,3);assert.equal(new Set(pages.map(p=>p.slug)).size,3);for(const p of pages){assert.ok(p.title);assert.ok(p.localizedTitles.en);assert.match(p.slug,/^[a-z0-9/-]*$/)}})
test('本地媒体与来源摘要一致',async()=>{const manifest=JSON.parse(await readFile(new URL('public/templates/forge-x/sources.json',root),'utf8'));for(const s of manifest.sources){const bytes=await readFile(new URL('public/templates/forge-x/'+s.file,root));assert.equal(createHash('sha256').update(bytes).digest('hex'),s.sha256,s.file)}})
test('交付截图真实存在',async()=>{assert.ok(metadata.screenshots.length>=12,'尚未完成三端截图');for(const s of metadata.screenshots)await access(new URL('.tpl/'+s.src,root))})

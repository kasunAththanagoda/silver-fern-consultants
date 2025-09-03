import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request){
  const body = await req.json();
  if(!body?.name || !body?.email || !body?.phone){
    return NextResponse.json({ error:'missing fields' }, { status: 400 });
  }
  const file = path.join(process.cwd(), 'data', 'leads.json');
  let leads: any[] = [];
  try { const txt = await fs.readFile(file, 'utf8'); leads = JSON.parse(txt); } catch {}
  const entry = { id: Date.now(), createdAt: new Date().toISOString(), ...body };
  leads.push(entry);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(leads, null, 2));
  return NextResponse.json({ ok:true });
}

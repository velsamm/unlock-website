import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync("package.json").toString()) as { version: string; };

const { version } = packageJson;

export async function GET() {
	return new Response(JSON.stringify({ version }), { status: 200, });
}
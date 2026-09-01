import "dotenv/config";
import { Solari } from "@solarisdk/browser";

async function main() {

    const solari = new Solari({
        apiKey: process.env.SOLARI_API_KEY!
    });

    const browser = await solari.launch();

    try {

        const page = await browser.newPage();

        await page.goto("https://example.com");

        console.log("Page title:", await page.title());
        console.log("Page URL:", page.url());

    } finally {

        await browser.close();

    }
}

main().catch(console.error);

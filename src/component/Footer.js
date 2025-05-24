

export default function Footer () {
    return(
        <>
        <footer class="bg-white w-full bottom-0 mt-4 mmd:bottom-0">
            <div class="w-full w-full p-4 md:flex md:items-center md:justify-between mmd:text-center">
            <span class="text-md text-black-200 sm:text-center opacity-75 dark:text-black-200">6te9 LTD © 2024 <span className="mx-4">|</span><a href="/Sitemap" class="hover:underline">sitemap</a>
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-md font-medium text-black-500 opacity-75 dark:text-black-400 sm:mt-0 msm:flex mmd:justify-center">
                <li>
                    <a href="/About" class="me-4 md:me-6">About Us</a>
                </li>
                <li>
                    <a href="/product" class="me-4 md:me-6">Product</a>
                </li>
                <li>
                    <a href="/Contact" class="me-4 md:me-6">Contact Us</a>
                </li>
            </ul>
            </div>
        </footer>
        </>
    )
}
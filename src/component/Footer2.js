

export default function Footer2 () {
    return(
        <>
        <footer class="bg-white absolute inset-x-0 bottom-0 mt-4 mx-2 dark:bg-white-800">
            <div class="w-full w-full p-4 md:flex md:items-center md:justify-between">
            <span class="text-md text-gray-500 sm:text-center dark:text-gray-400">6te9 LTD © 2024 <span className="mx-4">|</span><a href="#" class="hover:underline">sitemap</a>
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About Us</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Product</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Contact Us</a>
                </li>
            </ul>
            </div>
        </footer>
        </>
    )
}
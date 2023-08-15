


export default function Chat(){
    return(
        <body class="bg-gray-100 dark:bg-gray-800">
        {/* <!-- Your website content goes here --> */}
        <div class="flex flex-1 overflow-hidden h-screen max-w-screen-2xl m-auto">
            <div class="p-12 lg:p-20 w-full">
                <div class="max-h-full h-full flex flex-row">
                    {/* <!-- LEFT SIDEBAR START --> */}
                    <aside class="w-full lg:w-2/6 bg-white dark:bg-gray-900 rounded-lg mr-5">
                        <div class="flex p-10 justify-between">
                            <div class="text-4xl font-semibold dark:text-white text-gray-900">
                                Chat
                            </div>
                            {/* <!-- USER SECTION START --> */}
                            <div class="flex-1 overflow-y-scroll">
                                <div class="w-full space-y-10">
                                    {/* <!-- USER --> */}
                                    <div class="cursor-pointer flex px-10">
                                        <div class="mr-4 relative w-12">
                                            {/* <img class="rounded-full w-full mr-2" src={'./logo192.png'} alt="Dem" /> */}
                                        </div>
                                    </div>
                                    {/* <!-- USER --> */}
                                </div>
                            </div>
    
    
                            {/* <!-- USER SECTION START --> */}
                        </div>
                    </aside>         
                    {/* <!-- LEFT SIDEBAR END -->
                    <!-- RIGHT SECTION --> */}
                    <section class="relative max-h-full h-full bg-white rounded-lg w-full flex flex-col dark:bg-gray-900 lg:flex hidden">
                        {/* <!-- MESSAGES start --> */}
                        <div id="allmessages" class="flex-1 overflow-y-scroll p-5">
                            {/* <!-- LEFT MESSAGE --> */}
                            <div class="flex justify-start">
                                <div class="w-14 mr-5">
                                    <img class="rounded-full w-full mr-2" src={'./logo192.png'} alt="Ok" />
                                </div>
                                <div class="flex flex-col space-y-5 text-left">
                                    <div>
                                        <span class="bg-gray-100 text-gray-900 p-5 text-base rounded-r-lg rounded-b-lg inline flex max-w-xl dark:text-grey">
                                            How are you?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <div class="space-y-5 text-right">
                                    <div class="bg-indigo-800 text-white p-5 text-base rounded-l-lg rounded-b-lg inline-block max-w-xl">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-none p-5">
                            <div>
                                <div class="relative flex">
                                    <span class="absolute inset-y-0 flex-items-center">
    
                                    </span>
                                    <input type="text" placeholder="Type Here ...." class="w-full focus:outline-none focus:placeholder-gray-400 text-white placeholder-gray-400 pl-12 bg-gray-800 rounded-full py-3 pr-5"/>
                                    <div class="ml-5">
                                        <button class="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-indigo-800 hover:bg-indigo-600 focus:outline-none">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </section>
    
                </div>     
            </div>
        </div>
    </body>
    )
}
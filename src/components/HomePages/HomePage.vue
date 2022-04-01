<template>
  <div>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">Vision</h1>
                <p class="mt-4 text-lg text-gray-300">
                  Vision is a product with the aim to modernize home security
                  systems and bring them to the modern world
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">
                    Modernize your Home security
                  </h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Home alarms have become outdated and its time for them to be
                    brought to the modern era Vision allows you to add our smart
                    devices to your security system
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Create Triggers</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Want to be able to have custom events within your home
                    security system you can now do that with vision through the
                    device manager
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Instant Notification</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Any trigger will notify you immediately either via SMS or
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">
                  Feel safe when working from home
                </h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Vision with instant notifications allows for monitoring even
                  whilst your alarm may be disarmed allowing for complete
                  control and monitoring of your home even with headphones on
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Modernized Home Security</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Feel more secure</h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Manage More than one property from the comfort of your
                          home
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Created By</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
                Vision was created for a final year project dissertation by...
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHrFUysQ6Pulw/profile-displayphoto-shrink_800_800/0/1633028395260?e=1654128000&v=beta&t=CqzrKMihnvOhu3cFPVyc5idF0e-lvDNugM0XO8b4m0c"
                  class="shadow-lg rounded-full max-w-full mx-auto"
                  style="max-width: 120px"
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">Mathew Reynolds</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                  <div class="mt-6">
                    <a
                      class="bg-white text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      href="https://github.com/mattyr3200"
                    >
                      <svg
                        width="32px"
                        height="32px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
                        />
                      </svg>
                    </a>
                    <a
                      class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      href="https://www.linkedin.com/in/mattyr3200/"
                    >
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 112.196 112.196"
                      >
                        <circle
                          style="fill: #007ab9"
                          cx="56.098"
                          cy="56.097"
                          r="56.098"
                        />
                        <path
                          style="fill: #f1f2f2"
                          d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118    c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715    c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662    C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967    c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z     M27.865,83.739H41.27V43.409H27.865V83.739z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="block bg-gray-900 shadow">
        <div class="container mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                &copy; Mathew Reynolds for use in Final Year Project
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

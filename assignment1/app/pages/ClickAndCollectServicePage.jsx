import Faq from '../components/Faq'
export default function ClickAndCollectServicePage() {
    return (
        <>
            <section className="w-full my-12">
                <div className="flex flex-wrap md:flex-nowrap gap-y-3">
                    <div className="w-full md:w-2/5 flex flex-col justify-center">
                        <h1 className="text-black text-4xl font-bold mb-12 px-3">
                            Click and collect
                        </h1>
                        <p className="text-justify px-3 opacity-90 mb-3">
                            With IKEA Click and collect, you’re in control. Place an order online when it’s convenient and choose when and where to collect it. You’ll still make a trip, but we’ll gather your items so that you have more time and energy for assembling instead.
                        </p>
                        <div className="h-10"></div>

                    </div>
                    <div className="w-full md:w-3/5 flex items-center justify-center">
                        <img
                            src="/images/ClickCollectService/services.jpg"
                            alt="Financial service"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="md:w-[60%] mt-6">
                    <p className="text-justify px-3 opacity-80 mb-3">
                        Contactless Click and collect service is available at select Pick-up locations nationwide.
                        <strong> Starting at $5</strong>, you can place an order online and collect it from your local
                        <a href="" className="underline">IKEA store</a>,
                        <a href="" className="underline">Pick-up locker*</a>
                        (free for IKEA Family members) or an external
                        <a href="" className="underline"> Pick-up location</a>.
                    </p>

                    <p className="text-justify px-3 opacity-80 mb-3">
                        *Pick-up lockers are only available at select stores.
                        <a href="" className="underline">
                            Click here for details.
                        </a>
                    </p>
                    <ul className="flex gap-x-1 mt-3 px-3 flex-wrap">
                        <li>
                            <a href="#" className="underline opacity-90 hover:opacity-100">Options and pricing</a>
                        </li>
                        <li className="opacity-50"> | </li>
                        <li>
                            <a href="#" className="underline opacity-90 hover:opacity-100"> How it works </a>
                        </li>
                        <li className="opacity-50"> | </li>
                        <li>
                            <a href="#" className="underline opacity-90 hover:opacity-100"> Good to know </a>
                        </li>
                        <li className="opacity-50"> | </li>
                        <li>
                            <a href="#" className="underline opacity-90 hover:opacity-100">FAQ</a>
                        </li>
                    </ul>

                </div>

                <hr className="mt-20" />

            </section>

            <section>
                <div className="w-full md:w-2/3 mb-16">
                    <h1 className="text-black text-2xl font-bold my-10">How Click and collect works </h1>

                    <ul type='1' className="pl-8 opacity-90">
                        <li className="mb-3"><strong className="opacity-90">Step 1:</strong> Choose ‘Click and collect’ at checkout and you will be able to select an <a href="" className="underline">IKEA Store</a>,
                            <a href="" className="underline">Pick-up locker</a> or a nearby <a href="" className="underline">Pick-up location</a>, operated by a third-party partner.</li>

                        <li className="mb-3"><strong className="opacity-90">Step 2:</strong> Wait until you receive the “Ready for pickup” email before heading to the store or the Pick-up location.</li>

                        <li className="mb-3"><strong className="opacity-90">Step 3:</strong> Follow the instructions in the email and proceed to your selected store or Pick-up location. While collection will be contactless, pick-up processes may vary from location to location. Further direction will be communicated upon arrival.</li>

                    </ul>
                </div>
                <hr className="mt-20" />
            </section>

            <section>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="col-span-1">
                        <div class="pb-[56.49761904761905%] relative">
                            <img src="https://www.ikea.com/ext/ingkadam/m/e744380bd7dc4/original/PH120827-crop001.jpg?f=s" alt="Cars parked in front of an IKEA store" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            <a href="" class="absolute inset-0 flex items-center justify-center">
                                {null}
                            </a>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Collect at an IKEA store</h3>
                            <ul class="mt-2 list-disc pl-4">
                                <li>$5 flat rate (<a href="https://www.ikea.com/ca/en/ikea-family/">free for IKEA Family members</a>)</li>
                                <li>Approximate lead time: Two hours to two days after placing order</li>
                                <li>Maximum package size: No limit</li>
                                <li>Maximum package weight: No limit</li>
                            </ul>
                        </div>
                        <a href="https://www.ikea.com/ca/en/stores/"
                            className="block px-4 py-2 text-center bg-black text-white rounded-full mt-4 w-[230px]"
                        >View all IKEA store locations</a>
                    </div>
                    <div class="col-span-1">
                        <div class="pb-[56.2%] relative">
                            <img src="https://www.ikea.com/ext/ingkadam/m/4871db53df483ef9/original/PE365319-crop001.jpg?f=s" alt="A person riding a cargo bicycle with IKEA boxes" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            <a href="https://www.ikea.com/ca/en/stores/#a51807d0-f91f-11eb-a264-3bce48b3ef38" class="absolute inset-0 flex items-center justify-center ">
                                {null}
                            </a>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Use a Pick-up location</h3>
                            <p class="mt-2">Enjoy flat-rate shipping with our Pick-up locations. Collect your online orders at convenient partner locations.</p>
                        </div>
                        <a href="https://www.ikea.com/ca/en/stores/#a51807d0-f91f-11eb-a264-3bce48b3ef38"
                            className="block px-4 py-2 text-center bg-black text-white rounded-full mt-4 w-[230px]"
                        >View all Pick-up locations</a>
                    </div>
                    <div class="col-span-1">
                        <div class="pb-[56.2%] relative">
                            <img src="https://www.ikea.com/images/a-fedex-worker-helping-a-customer-cf18483475a46f3356b26a1e7a8bb12b.jpg?f=s" alt="FedEx worker helping a customer" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            <a href="" class="absolute inset-0 flex items-center justify-center ">{null}</a>
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">Pickup your small packages at a FedEx retail location near you</h3>
                            <p class="mt-2">Enhance your IKEA online shopping experience with convenient package pickup service. Choose your preferred pickup location during checkout.</p>
                        </div>
                        <a href="https://local.fedex.com/en/search"
                            className="block px-4 py-2 text-center bg-black text-white rounded-full mt-4 w-[300px]"
                        >Find a FedEx retail location near you</a>
                    </div>
                </div>

            </section>


            <section className='mb-4'>
                <div className="w-full md:w-2/3 mb-16">
                    <h1 className="text-black text-2xl font-bold my-10">Good-to-know basics </h1>

                    <ul className="list-disc list-inside opacity-90">
                        <li className="mb-3 ml-6 ">Due to high demand, time slots may be limited. Available times are listed during online check-out.</li>
                        <li className="mb-3 ml-6 ">If you can’t place an order at your desired <a href="https://www.ikea.com/ca/en/stores/" className="underline">IKEA store</a>, try another location, remove an out-of-stock item from your cart or order later when stock is replenished.</li>
                        <li className="mb-3 ml-6 ">Consider package dimensions and weights, so your order will fit in your vehicle. This information is on each product’s webpage.</li>
                        <li className="mb-3 ml-6 ">Decide in advance who will collect your order. You can list an alternate collector while placing your order.</li>
                        <li className="mb-3 ml-6 ">Want an order update? If you have an order confirmation number, you can <a title="track your order" href="https://order.ikea.com/ca/en/purchases/lookup/" className="underline">track your order</a>.</li>
                        <li className="mb-3 ml-6 ">Shopping for your business? Check out <a href="https://www.ikea.com/ca/en/ikea-business/" className="underline">IKEA for Business</a>. We’ll do more work for you so that you can spend more time on your customers.</li>
                    </ul>
                </div>
                <hr className="mt-20" />
            </section>

            <Faq faqFor='clickandcollect' />
        </>
    )
}
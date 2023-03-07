import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Accordion(props) {
    return (
        <div className='border-b-[1px]'>
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full items-center justify-between text-left py-2">
                            <span>{props.question}</span>
                            <ChevronDownIcon className={`${open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-[#f47c57]`} />
                        </Disclosure.Button>
                        <Transition
                            show={open}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-y-4 opacity-70"
                            enterTo="translate-y-0"
                            leave="transition linear duration-200 transform"
                            leaveFrom="translate-y-0"
                            leaveTo="-translate-y-4 opacity-50"
                        >
                            <Disclosure.Panel as="div" static className="text-gray-500 py-2">
                                {props.answer}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div >
    )
}
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface AddItemModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddItemModal({ isOpen, setIsOpen }: AddItemModalProps) {
  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-72 max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg mb-4 text-center font-medium leading-6 text-gray-900"
                >
                  Add Item
                </Dialog.Title>
                <div className="flex mb-8 space-y-4 items-center justify-center flex-col   mt-2 ">
                  <div className="flex flex-col">
                    <input
                      className="border-2 p-2 rounded-md"
                      placeholder="Name"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="border-2 p-2 rounded-md"
                      type="number"
                      placeholder="0.00"
                      name="price"
                      id="price"
                    />
                  </div>
                </div>

                <div className=" flex items-center justify-center gap-4 mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-geraldine-light px-4 py-2 text-sm font-medium bg-opacity-20 text-geraldine-dark hover:bg-geraldine focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-opacity-20 bg-h-pink-light px-4 py-2 text-sm font-medium text-h-pink-dark hover:bg-h-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

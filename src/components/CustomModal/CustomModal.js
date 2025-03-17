import { useState } from 'react';
import { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';

import './CustomModal.css';

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Button to open the modal */}
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 bg-red" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="my-auto transform overflow-hidden p-6 text-left align-middle shadow-xl transition-all md:h-[791px] md:w-[854px] bg-white rounded-lg"
                >
                  <div className="flex md:mt-[50px]">
                    <button className="ml-auto !bg-transparent" onClick={closeModal}>
                      close
                    </button>
                  </div>
                  Modal content goes here
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

// CustomModal.propTypes = {
//   // You can add props here if needed in the future
// };

export default CustomModal;
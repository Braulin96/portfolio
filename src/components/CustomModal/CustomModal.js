import PropTypes from 'prop-types';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { IoCloseSharp } from "react-icons/io5";

import './CustomModal.css';


const CustomModal = ({ isOpen = false, onClose, children}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-0"
            leave="ease-in duration-1000"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <div className="modal-overlay fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-20 flex items-center justify-center">
            <div className="flex items-center justify-center ">
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
                  className="my-auto transform overflow-hidden transition-all max-w-[1200px] w-full py-[50px] bg-black bg-opacity-10 border border-opacity-10 shadow-2xl rounded-[8px] justify-center px-[20px] mx-[20px] flex items-center flex-col py-[19px] max-h-[700px]"
                >
                  <IoCloseSharp size={24} className='ml-auto cursor-pointer' onClick={onClose} />
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
};

export default CustomModal;
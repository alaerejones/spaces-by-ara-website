'use client'

import React, { createContext, useContext, useState } from 'react'

interface EnquiryModalState {
  property?: string
  enquiryType?: string
  [key: string]: any
}

interface EnquiryModalContextType {
  isOpen: boolean
  openModal: (data?: EnquiryModalState) => void
  closeModal: () => void
  modalData: EnquiryModalState
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined)

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalData, setModalData] = useState<EnquiryModalState>({})

  const openModal = (data?: EnquiryModalState) => {
    if (data) {
      setModalData(data)
    }
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalData({})
  }

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
      {children}
    </EnquiryModalContext.Provider>
  )
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext)
  if (context === undefined) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return context
}

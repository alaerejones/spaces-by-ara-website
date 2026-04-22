'use client'

import React, { createContext, useContext, useState } from 'react'

interface EnquiryModalContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined)

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <EnquiryModalContext.Provider value={{ isOpen, openModal, closeModal }}>
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

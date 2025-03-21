'use client'
import React from 'react'
import { FeedbackFormSection } from "@/section/feedbackSection/FeedbackFormSection";

const page = () => {
  return (
    <>
      <div className="w-1/2 mx-auto mt-20">
      <h2 className="font-bold text-3xl mb-4">Add Feedback</h2>
      <FeedbackFormSection />
     
    </div>
    </>
  )
}

export default page

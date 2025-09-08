'use client'
import React from 'react'
import MenuBar from '../_components/MenuBar';
import ProfileCard from '../_components/ProfileCard';

function ViewProfile() {
  return (
    <>
      <h1 className="text-5xl py-7 flex justify-center align-middle">View Profile</h1>
      <MenuBar />
      <ProfileCard />
    </>
  )
}

export default ViewProfile;
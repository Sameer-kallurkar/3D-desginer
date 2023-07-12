import React from 'react'
import CustomButton from './CustomButton'
import { useSnapshot } from 'valtio'
import state from '../store'

const FilePicker = (props) => {
  const snap = useSnapshot(state)
  return (
    <div className='filepicker-container'>
      <div className="flex-1 flex flex-col">
        <input type="file" id='file-upload' accept='image/*' onChange={(e)=>props.setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className={`filepicker-lable px-[25%] border-b border-black`}>Upload File</label>
        <p className='mt-2 text-gray-500 text-xs mx-[35%] truncate'>{props.file === '' ? "No file selected" : props.file.name}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton type="outline" title="Logo" handleClick={()=> props.readFile('logo')} customeStyles = 'text-xs' />
        <CustomButton type="filled" title="Full" handleClick={()=> props.readFile('full')} customeStyles = 'text-xs' />
      </div>

    </div>
  )
}

export default FilePicker
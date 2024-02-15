import { useState } from 'react'
import Modal from './modal'
import './modal.css'

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false)

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup)
  }

  function onClose() {
    setShowModalPopup(false)
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup ? (
        <Modal
          id={'custom-id'}
          onClose={onClose}
          header={<h1>Customized Header</h1>}
          body={<h1>Customized Body</h1>}
          footer={<h1>Customized Footer</h1>}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default ModalTest

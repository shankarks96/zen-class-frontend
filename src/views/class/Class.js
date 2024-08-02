/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect } from 'react'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import apiCall from '../../services/apiCall'

function Class() {
  const [Sessions, AllSessions] = useState([])
  const [session, setSession] = useState({})
  useEffect(() => {
    GetSesion()
  }, [])
  const GetSesion = async () => {
    try {
      const response = await apiCall('get', 'api/student/my/session-roadmap')
      console.log('Session', response)
      AllSessions(response.data.session)
    } catch (error) {
      console.error('Login failed', error)
    }
  }
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {isEmptyObject(session) && <h1>Join the class on time</h1>}
            {!isEmptyObject(session) && (
              <div className="d-grid gap-3">
                <CCard>
                  <CCardBody>
                    <div className="d-flex flex-wrap justify-content-between align-items-between">
                      <CCardTitle>Please watch the recording.</CCardTitle>
                      <CButton className="btn-primary">Play Recording</CButton>
                    </div>
                  </CCardBody>
                </CCard>
                <div className="session-container p-4 border rounded-lg shadow-lg">
                  <div className="session-area">
                    <span className="text-2xl font-semibold">{session?.name}</span>
                    <br />
                    <span className="text-lg">
                      {session?.date} {session?.startTime} {session?.endTime}
                    </span>
                    <hr className="my-4" />
                    <div className="preread-head font-bold text-lg">Contents:</div>
                    {session?.contents?.map((content) => (
                      <div className="ml-3" key={content}>
                        <span className="preread whitespace-pre-wrap">{content?.name}</span>
                      </div>
                    ))}

                    <div className="preread-head mt-3 font-bold text-lg">Pre-read:</div>
                    {session?.preRead?.map((Read) => (
                      <div className="ml-3" key={Read}>
                        <span className="preread whitespace-pre-wrap">{Read?.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-4">
            <CCard>
              <CCardBody>
                <CCardTitle>Sessions Roadmap</CCardTitle>
                <div className="d-flex flex-wrap">
                  {Sessions.map((item, index) => (
                    <button
                      key={index}
                      size="lg"
                      onClick={() => {
                        setSession(item)
                      }}
                      className={`btn ${item._id === session._id ? 'btn-danger' : 'btn-primary'} mx-2 mb-2`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </CCardBody>
            </CCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default Class

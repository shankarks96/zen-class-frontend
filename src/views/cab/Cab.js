/* eslint-disable prettier/prettier */
import React from 'react'

function Cab() {
  return (
    <>
      <div className="flex ml-1">
        <div className="flex-1 flex flex-col px-0 mx-2 items-start border-r">
          <div className="w-full flex flex-col px-0 mx-2 items-center">
            <div className="taskContainer sideBox1 flex w-full mt-0 mb-3 mx-2 py-3">
              <div className="mx-2">
                <div className="title font-medium">SHANKAR K S</div>
                <div className="flex items-center text-gray-600 mx-1">
                  <div className="mx-1">(B52 WD2 English - Capstone Project)</div>
                  <div className="mx-1">Zen ClassNclassName Student Dashboard</div>
                </div>
              </div>
              <div className="mx-2">
                <div className="ml-3 mr-1 flex justify-end">
                  <div className="text-gray-600 mx-1 px-1 rounded">Yet to be graded</div>
                  <div className="tasktag px-2 rounded">capstone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 mt-2 flex-1 px-0 taskContainer">
          <div className="flex my-2 mx-4 items-center">
            <div className="my-2 mx-2">
              <div className="title font-medium">SHANKAR K S</div>
              <div className="flex items-center text-gray-600 mx-1">
                <div className="mx-1">(B52 WD2 English - Capstone Project)</div>
                <div className="mx-1">Zen ClassNclassName Student Dashboard</div>
              </div>
            </div>
            <div>
              <div className="ml-3 mr-1 flex justify-end">
                <div className="text-gray-600 mx-1 px-1 rounded">Yet to be graded</div>
                <div className="tasktag px-2 rounded">capstone</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-1 commentsstudent">
            <div className="w-full">
              <div className="mx-2 mt-3">Description :</div>
              <div className="mx-2 mt-0 mb-3 py-3 px-2 rounded descriptionStudents">
                <div className="smooth-scroll list-none">
                  <p>
                    To identify and implement the Capstone project as the title given below by
                    meeting all the necessary requirements.
                  </p>
                  <p>
                    <strong>Task Title: Zen className student dashboard</strong>
                  </p>
                  <p>
                    <strong>Any specifications on the design?</strong>
                  </p>
                  <ul>
                    <li>Front-end: Reactjs</li>
                    <li>Back-end: Nodejs</li>
                    <li>Database: MongoDB</li>
                    <li>
                      <strong>Requirements:</strong>
                    </li>
                    <li>The project should achieve the CODE QUALITY</li>
                    <li>Use fonts/icons if it’s required in the design.</li>
                    <li>The use of various charts is required in the design.</li>
                    <li>The use of bootstrap/ material CSS is required in the design</li>
                  </ul>
                  <p>
                    <strong>How do I submit my work?</strong>
                  </p>
                  <ul>
                    <li>
                      Push all your work files to GitHub in two different repositories as given
                      below
                    </li>
                    <li>Front-end repo name project-name-frontend.</li>
                    <li>Back-end repo name project-name-backend.</li>
                    <li>
                      Deploy your front-end application on Netlify(https://www.netlify.com) and
                      back-end application on Render(https://render.com/).
                    </li>
                  </ul>
                  <p>
                    <strong>Any basic hints/links/reference sites to solve?</strong>
                  </p>
                  <p>https://getbootstrap.com/docs/4.4/getting-started/introduction/</p>
                  <p>https://www.chartjs.org/</p>
                  <p>https://jwt.io/introduction/</p>
                  <p>https://react-bootstrap.github.io/</p>
                  <p>https://materializecss.com/</p>
                  <p>https://tailwindcss.com/</p>
                  <p>https://expressjs.com/</p>
                  <p>
                    <strong>Terms and Conditions?</strong>
                  </p>
                  <ul>
                    <li>You agree to not share this confidential document with anyone.&nbsp;</li>
                    <li>
                      You agree to open-source your code (it may even look good on your profile!).
                      Do not mention our company’s name anywhere in the code.
                    </li>
                    <li>
                      We will never use your source code under any circumstances for any commercial
                      purposes; this is just a basic assessment task.
                    </li>
                    <li>For capstone, the use case has to be identified by the developer.</li>
                  </ul>
                  <p>
                    NOTE: Any violation of Terms and conditions is strictly prohibited. You are
                    bound to adhere to it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Code</th>
                <th className="border px-4 py-2">Submission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Front-end Source code</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full"></input>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Back-end Source code</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full"></input>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Front-end Deployed URL</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full"></input>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Back-end Deployed URL</td>
                <td className="border px-4 py-2">
                  <input type="text" className="w-full"></input>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <h6>Comments: </h6>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="leave your comments here"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pl-2 my-0 text-center">
            <button className="btn reqbuttoncreate" type="submit">
              Submit
            </button>
          </div>
          <div className="hidden">
            <div className="flex justify-between mx-1">
              <div className="w-full">
                <div className="mx-2 mt-3">Comments:</div>
                <div className="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent"></div>
              </div>
            </div>
            <hr className="containerDivider mx-1"></hr>
          </div>
          <p className="p-2 text-yellow-500">
            <strong>Warning</strong>: 2 mark may be deducted automatically from your total score if
            your submission is beyond the deadline
          </p>
        </div>
      </div>
    </>
  )
}

export default Cab

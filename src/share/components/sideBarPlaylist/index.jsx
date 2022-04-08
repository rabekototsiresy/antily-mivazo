import React from 'react'
import { GiTrumpetFlag } from 'react-icons/gi'
import { MdLibraryMusic } from 'react-icons/md'

function SideBarPlaylist() {
  return (
    <div className="col-md-2 ps-3  border p-lg-0 p-md-0 p-sm-0 p-xl-0  border-top-0 border-bottom border-start-1 border">
            <table className='mt-2'>
                <thead></thead>
              <tbody>
              <tr className='border'>
                <td className='p-2'><MdLibraryMusic /></td>
                <td className='w-100 ps-2 p-2 '>Music</td>
              </tr>
              <tr className='border'>
                <td className='p-2'><GiTrumpetFlag /></td>
                <td  className='w-100 ps-2'>Fivondronana</td>
              </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
    </div>
  )
}

export default SideBarPlaylist
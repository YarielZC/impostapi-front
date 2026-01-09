import CicrcleAndLabel from '../CircleAndLabel/CicrcleAndLabel';
import * as CodeJson from '../../assets/CodeJson.png'
import './CodeExpampleJson.css'
import FilledCircle from '../FIlledCircle/FilledCircle';

export default function CodeExpampleJson() {
  return (
    <div className='w-4/5 flex flex-col rounded-xl border border-[var(--border-color)] custom-shadow'>
      <div className='flex items-center justify-between py-4 px-6 border-b border-b-[var(--border-color)] bg-[var(--dark-mode-card-form-color)] rounded-t-xl'>
        <div className='flex gap-2'>
          <FilledCircle color='#ff5f56' />
          <FilledCircle color='#ffbd2e' />
          <FilledCircle color='#27c93f' />
        </div>

        <p className='text-[#4e4e4e] font-bold'>GET /api/v1/users/random</p>
      </div>
      <div className='bg-[#0f0f13] px-8 py-14'>
        <img src={CodeJson.default} alt="" />
      </div>
      <div className='flex items-center justify-between py-4 px-6 rounded-b-2xl border-t border-t-[var(--border-color)] bg-[var(--dark-mode-card-form-color)]'>
        <p className='font-bold text-[var(--secondary-text-color)]'>JSON</p>
        <CicrcleAndLabel iconClassName='text-[#10b981]' textClassName='text-[var(--secondary-text-color)] font-bold'>Live</CicrcleAndLabel>
      </div>
    </div>
  )
}
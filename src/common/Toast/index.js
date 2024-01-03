import React from 'react';
import { toast } from 'react-toastify';
const Msg = ({ message, subtitle, icon }) => (
	<div className='d-flex'>
		<div className='ml-2 mr-2'>
			{/* <FontAwesomeIcon icon={icon} className="font-size-xxl" /> */}
		</div>
		<div className='d-flex flex-column heading'>
			<div className='font-size-lg font-weight-bold'>{subtitle}</div>
			<div className='message'>{message}</div>
		</div>
	</div>
);
export function ToastSuccess(message) {
	console.log('message');
	toast.success(<Msg message={message} subtitle='Success!' />);
}

export function ToastError(message) {
	toast.error(<Msg message={message} subtitle='Error!' />);
}

export function ToastWarning(message) {
	toast.warning(<Msg message={message} subtitle='Warning' />);
}
export function ToastInfo(message) {
	toast.info(<Msg message={message} subtitle='Information.' />);
}

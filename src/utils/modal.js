import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './history';

const MySwal = withReactContent(Swal);

export const menuModal = (component) => {
    return MySwal.fire({
        html: (
            <HistoryRouter history={history}>
                <div onClick={() => MySwal.close()}>{component}</div>
            </HistoryRouter>
        ),
        position: 'top-end',
        showClass: {
            popup: `
            animate__animated
            animate__fadeInRight
            animate__faster
          `,
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutRight
            animate__faster
          `,
        },
        grow: 'column',
        showConfirmButton: false,
        showCloseButton: true,
        allowOutsideClick: true,
        background: '#000000',
        customClass: 'menu__modal',
        heightAuto: false,
    });
};

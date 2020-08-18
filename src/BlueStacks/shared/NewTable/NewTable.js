import React from 'react';
import s from './NewTable.module.scss';
import { convertToFormat } from '../../utils/dateUtils';
import calendar from '../../public/svgfonts/calendar.png';
import file from '../../public/svgfonts/file.png';
import report from '../../public/svgfonts/statistics-report.png';
import price from '../../public/svgfonts/Price.png';
import { getImage } from '../../utils/AppUtils';
import { compareDates, daysBetween } from '../../utils/dateUtils';

export default class NewTable extends React.PureComponent {
    render() {
        const { HeaderList, rowList } = this.props;
        return (
            <>
                <table>
                    <thead>
                        <tr className={s.header}> 
                            {HeaderList.map((item, index) => {
                                return (
                                    <th className={s.tableHeaderCell} key={`${index}_header`}>
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rowList.map((item, index) => {
                            let text = 'Toady';
                            if (compareDates(new Date(item.createdOn), new Date()) === 1) {
                                let day = daysBetween(new Date(item.createdOn), new Date());
                                text = day > 1 ? `${day} Days Ahead` : `${day} Day Ahead`;
                            } else if (compareDates(new Date(item.createdOn), new Date()) === -1) {
                                let day = daysBetween(new Date(item.createdOn), new Date())
                                text = day > 1 ? `${day} Days Ago` : `${day} Day Ago`;
                            }
                            return (
                                <tr key={`_row${index}`}>
                                    <td className={`${s.tableBodyCell}`}><div className={`${s.flex}`}><span>{convertToFormat(new Date(item.createdOn), 'ddmmyyyy', false)}</span><span>{text}</span></div></td>
                                    <td className={s.tableBodyCell}><div className={s.secondRow}><img src={getImage(item.image_url)} alt="img"></img><div className={s.text}><span>{item.name}</span><span>{item.region}</span></div></div></td>
                                    <td className={s.tableBodyCell}><div className={s.thirdRow} onClick={() => { this.props.onPrice(item) }}><img src={price} alt="img"></img><span>view pricing</span></div></td>
                                    <td className={s.tableBodyCell}><div className={s.fourthRow}><img src={file} alt="img" onClick={() => { window.open('http://www.sample-videos.com/csv/Sample-Spreadsheet-1000-rows.csv') }}></img><span>CSV</span></div></td>
                                    <td className={s.tableBodyCell}><div className={s.fifthRow}><img src={report} alt="img" onClick={() => { window.open('http://africau.edu/images/default/sample.pdf') }}></img><span>Report</span></div></td>
                                    <td className={s.tableBodyCell}><div className={s.sixthRow}><img src={calendar} alt="img" onClick={() => { this.props.onCalendar(item) }}></img><span>Schedule Again</span></div></td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
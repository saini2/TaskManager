import React from 'react';
import style from './TaskManager.module.scss';
import logo from '../../../public/svgfonts/bluestacks.svg';
import TabChanger from '../../../shared/TabChanger/TabChanger';
import CardLayout from '../../../shared/CardLayout/CardLayout';
import { getImage } from '../../../utils/AppUtils';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getTodayData, getFutureData, getPastData, updateDataList } from './action';
import NewTable from '../../../shared/NewTable/NewTable';
import lang from '../../../constants/localization';

const HeaderList = ["DATE", "CAMPAIGN", "VIEW", "ACTIONS", "", ""];
export default class TaskManager extends React.Component {
    state = {
        currentTab: 'upcoming',
        modal: false,
        showCalendar: false,
        selectedDate: null,
        listData: [],
        value: null,
        calendarRow: null,
        text: 'English',
        change: false,
        language: 'en',
        constants: lang('en')
    }

    componentDidMount() {
        //in the starting get upcming events list
        const dataList = getFutureData();
        this.setState({ listData: dataList });
    }

    //change tab changer method

    onSliderClick = (value) => {
        let listData;
        switch (value) {
            case 'live':
                listData = getTodayData();
                break;
            case 'past':
                listData = getPastData();
                break;
            default:
                listData = getFutureData();
        }
        this.setState({ currentTab: value, listData: listData });
    }
    closeModal = () => {
        this.setState({ modal: false });
    }

    showCalendar = (value) => {
        this.setState({ showCalendar: true, calendarRow: value });
    };

    /*
     Close Calendar on Click of Close Button
     @params : none
   */
    closeModalCalendar = () => {
        this.setState({ showCalendar: false });
    };

    setModal = (value) => {
        this.setState({ modal: true, value: value });
    }

    // for view pricing modal

    openModal = () => {
        const { value } = this.state;
        return (
            <>
                {this.state.modal && <div className={style.overlay} onClick={this.closeModal}>
                </div>}
                <CardLayout
                    height={"285px"} width={"250px"}
                >
                    <div className={style.parent}>
                        <div className={style.top}>
                            <img src={getImage(value.image_url)} alt="alt"></img>
                            <div className={style.name}>
                                <span>{value.name}</span>
                                <span>{value.region}</span>
                            </div>
                        </div>
                        <div className={style.price}>Pricing</div>
                        <div className={style.priceParent}>
                            <div className={style.value}><span>1 Week - 1 Month</span><span> {value.price.month}</span></div>
                            <div className={style.value}><span>6 Months</span><span></span>{value.price.halfYear}</div>
                            <div className={style.value}><span>1 Year</span><span></span>{value.price.year}</div>
                        </div>
                        <div className={style.buttonClass}>
                            <button onClick={() => this.closeModal()}>Close</button>
                        </div>
                    </div>
                </CardLayout>
            </>
        );
    }

    // calendar date select method
    onChange = date => {
        const newDate = new Date(date).getTime();
        const { calendarRow } = this.state;
        const newDataList = calendarRow;
        newDataList.createdOn = newDate;
        debugger
        updateDataList(newDataList);
        this.setState({ date, showCalendar: false });
    }

    //state manage of select language button
    changeLanguage = () => {
        this.setState({ change: !this.state.change });
    }

    // render tab changer for events

    renderTabChanger = () => {
        const { currentTab, constants } = this.state;
        return (
            <div className={style.tabchanger}>
                <TabChanger
                    onClick={e => {
                        this.onSliderClick('upcoming');
                    }}
                    text={constants.ch_upcoming}
                    config={'upcoming'}
                    active={currentTab}
                />
                <TabChanger
                    onClick={e => {
                        this.onSliderClick('live');
                    }}
                    text={constants.ch_live}
                    config={'live'}
                    active={currentTab}
                />
                <TabChanger
                    onClick={e => {
                        this.onSliderClick('past');
                    }}
                    text={constants.ch_past}
                    config={'past'}
                    active={currentTab}
                />
                <>

                    {this.state.change && <div className={style.overlay} onClick={this.changeLanguage}></div>}
                    <button onClick={this.changeLanguage} className={style.change} >{this.state.text}</button>
                    {this.state.change && (
                        <div className={style.selectParent}>
                            <div onClick={() => { this.selcetLanguage('en') }} className={style.select}>English</div>
                            <div onClick={() => { this.selcetLanguage('ge') }} className={style.select} id='changeLangauge' >German</div>
                        </div>
                    )}
                </>
            </div>
        )
    }
    //select language from dropdown

    selcetLanguage = (value) => {
        if (value === 'en') {
            this.setState({ text: 'English' });
        } else {
            this.setState({ text: 'German' });
        }
        this.setState({ language: value, change: false ,constants:lang(value)});
    }

    render() {
        const { constants } = this.state;
        return (
            <main>
                <section>
                    <div className={style.parent}>
                        <div className={style.secondParent}>
                            <div className={style.header}>
                                <img src={logo} alt='img'></img>
                                <div className={style.text}>
                                    <span>BlueStacks</span>
                                    <span>Play Bigger</span>
                                </div>
                            </div>
                            <div className={style.middlePart}>
                                <h1>{constants.ch_manage}</h1>
                                {this.renderTabChanger()}
                                <div className={style.tableList}>
                                    <NewTable HeaderList={HeaderList} rowList={this.state.listData} onPrice={this.setModal} onCalendar={this.showCalendar}></NewTable>
                                </div>
                            </div>
                            {this.state.modal && this.openModal()}
                            {this.state.showCalendar && (
                                <div
                                >
                                    <div className={style.overlay} onClick={() => { this.closeModalCalendar() }}></div>
                                    <div className={style.caledareCss}>
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
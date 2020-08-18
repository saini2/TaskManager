import { compareDates } from '../../../utils/dateUtils';
//for get upcoming events
export function getFutureData() {
  const data = localStorage.getItem('data');
  const DataList = JSON.parse(data);
  let newData = [];

  for (let i = 0; i < DataList.length; i++) {
    let flag = compareDates(new Date(DataList[i].createdOn), new Date());
    if (flag === 1) {
      newData.push(DataList[i]);
    }
  }
  return newData;
}
//for getting live events
export function getTodayData() {
  const data = localStorage.getItem('data');
  const DataList = JSON.parse(data);
  let newData = [];

  for (let i = 0; i < DataList.length; i++) {
    let flag = compareDates(new Date(DataList[i].createdOn), new Date());
    if (flag === 0) {
      newData.push(DataList[i]);
    }
  }
  return newData;
}
//for getting past events data list
export function getPastData() {
  const data = localStorage.getItem('data');
  const DataList = JSON.parse(data);
  let newData = [];

  for (let i = 0; i < DataList.length; i++) {
    let flag = compareDates(new Date(DataList[i].createdOn), new Date());
    if (flag === -1) {
      newData.push(DataList[i]);
    }
  }
  return newData;
}

//update events schedule
export function updateDataList(newDataList) {
  let currentList = JSON.parse(localStorage.getItem('data') ? localStorage.getItem('data') : null);
  let updatedList = Merge(currentList, newDataList);
  localStorage.setItem('data', JSON.stringify(updatedList));
}

const Merge = (currentList, newDataList) => {
  let updatedList = [];
  for (let i = 0; i < currentList.length; i++) {
       if (currentList[i].id === newDataList.id) {
      updatedList.push(newDataList);
    } else {
      updatedList.push(currentList[i]);
    }
  }
  return updatedList;
}
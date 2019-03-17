const React = require('react');
const ReactDOM = require('react-dom');
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

let echartsMap = '';
const options = {
  tooltip: {
    trigger: 'item',
    showDelay: 0,
    transitionDuration: 0.2,
    formatter: function (params) {
      return params.name
    }
  },
  visualMap: {
    left: 'right',
    min: 10000,
    max: 19000,
    inRange: {
      color: ['#2876aa', '#4961a3', '#1a78b7', '#3c62b3', '#246a99', '#4277aa', '#2e5d9c', '#287db8', '#1a6aa0']
    },
    text: ['High', 'Low'],
    calculable: false,
    show: false
  },
  series: [
    {
      name: 'DEMO',
      type: 'map',
      map: 'DEMO',
      zoom: 1,
      scaleLimit: { min: 1, max: 2 },
      itemStyle: {
        areaColor: '#fff',
        borderColor: '#cccccc'
      },
      label: {
        show: true,
        color: '#ffffff',
        distance: 0
      },
      emphasis: { 
        itemStyle: { areaColor: '#134d6f', shadowColor: 'rgba(0, 0, 0, 0.1)', shadowBlur: 10, opacity: 0.8 },
        label: { show: true, color: '#ffffff' }
      },
      data: [
        { name: '呷衣乡', value: 10000, type: 'P6' },
        { name: '长沙贡马乡', value: 10000, type: 'P6' },

        { name: '色须镇', value: 11000, type: 'P5' },
        { name: '格孟乡', value: 11000, type: 'P5', label: {
          padding: [0, 0, 70, 0]
        } },
        { name: '德荣马乡', value: 11000, type: 'P5', label: {
          padding: [10, 50, 0, 0]
        } },

        { name: '真达乡', value: 13000, type: 'P8' },
        { name: '奔达乡', value: 13000, type: 'P8' },

        { name: '蒙宜镇', value: 14000, type: 'P1' },
        { name: '尼呷镇', value: 14000, type: 'P1' },

        { name: '正科乡', value: 15000, type: 'P7' },
        { name: '洛须镇', value: 15000, type: 'P7' },
        { name: '麻呷乡', value: 15000, type: 'P7' },

        { name: '新荣乡', value: 16000, type: 'P2' },
        { name: '虾扎镇', value: 16000, type: 'P2', label: {
          padding: [60, 0, 0, 0]
        } },
        { name: '起坞乡', value: 16000, type: 'P2' },
        { name: '宜牛乡', value: 16000, type: 'P2' },

        { name: '阿日扎镇', value: 17000, type: 'P3' },
        { name: '长沙干马乡', value: 17000, type: 'P3'},
        { name: '温波镇', value: 17000, type: 'P3', label: {
          padding: [50, 0, 0, 0]
        } },

        { name: '国营牧场', value: 18000, type: 'P4' },
        { name: '瓦须乡', value: 18000, type: 'P4', label: {
          padding: [20, 0, 0, 40]
        } },

        { name: '长须贡马乡', value: 19000, type: 'P12' },
        { name: '长须干马乡', value: 19000, type: 'P12' }
      ]
    }
  ]
};

function geoJson () {
  fetch('./map.geojson', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(response => {
    return response.json()
  }).then(data => {
    echarts.registerMap('DEMO', data)
    let instance = echartsMap.getEchartsInstance()
    instance.setOption(options)
  })
};

const onEvents = {
  click: onChartClick.bind(this)
};

function onChartClick () {
  alert('点击事件')
}

geoJson()

ReactDOM.render(
  <div>
    <h1>地图</h1>
    <ReactEcharts
    ref={e => echartsMap = e}
    option={options}
    style={{ height: '900px', width: '700px' }}
    onEvents={onEvents}/>
  </div>,
  document.querySelector('#wrapper')
);
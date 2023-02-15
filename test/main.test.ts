import TsClock from '../src/main'
import JsClock from '../src/lib/Clock'
import { JSDOM } from 'jsdom'
const { window } = new JSDOM('<!doctype html><html><body></body></html>') // 导出JSDOM中的window对象

// @ts-ignore
global.window = window // 将window对象设置为nodejs中全局对象
describe('Clock', () => {
  const time = new Date()
  const option = {
    debug: true,
    tz: 'America/New_York'
  }

  /**
   * @jest-environment jsdom
   */
  it('typeScript', () => {
    // const clock = new TsClock(time, option)
    // expect(getActiveLink).toBe(true)
  })

  /**
   * @jest-environment jsdom
   */
  it('javascript', () => {
    // const clock = new JsClock(time, option)
  })
})
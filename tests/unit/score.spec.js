import { shallow } from '@vue/test-utils'
import score from '@/components/Game/score.vue'

describe('score.vue', () => {
  it('shouldn\'t render when empty score', () => {
    const wrapper = shallow(score, {
      propsData: {
        score: {
          success: 0,
          errors: 0
        }
      }
    })
    const template = wrapper.html()
    expect(template).toBeUndefined()
  })

  it('should render component', () => {
    const wrapper = shallow(score, {
      propsData: {
        score: {
          success: 23,
          errors: 5
        }
      }
    })
    const template = wrapper.html()
    expect(template).toMatchSnapshot()
  })
})

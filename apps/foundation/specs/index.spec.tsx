import { render } from '@testing-library/react'

import Index from '../pages/index'

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index seo={{ title: 'Test' }} />)
    expect(baseElement).toBeTruthy()
  })
})

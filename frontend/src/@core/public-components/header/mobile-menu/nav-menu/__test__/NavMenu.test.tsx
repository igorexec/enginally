import React from 'react'
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '__mocks__/router'
import { NavMenu } from '../NavMenu'

test('renders menu', () => {
  const { container } = renderWithRouter(<NavMenu items={[]} />)
  expect(container.firstChild).toHaveClass('nav-menu')
})

test('does not render menu items if no items provided', () => {
  const { container } = renderWithRouter(<NavMenu items={[]} />)
  expect(container.querySelectorAll('.nav-menu__item')).toHaveLength(0)
})

test('renders 2 menu items for 2 items provided', () => {
  const items = [{ title: '1', pathname: 'test' }, { title: '2', pathname: 'test2' }]
  const { container } = renderWithRouter(<NavMenu items={items} />)
  expect(container.querySelectorAll('.nav-menu__item')).toHaveLength(2)
})

test('renders links for items provided', () => {
  const items = [{ title: '1', pathname: 'test' }, { title: '2', pathname: 'test2' }]
  const { getByText } = renderWithRouter(<NavMenu items={items} />)
  expect(getByText('2')).toBeInTheDocument()
})

test('calls onItemClick prop when link clicked', () => {
  const items = [{ title: '1', pathname: 'test' }]
  const onItemClickSpy = jest.fn()
  const { getByText } = renderWithRouter(<NavMenu items={items} onItemClick={onItemClickSpy} />)
  const link = getByText('1')
  fireEvent.click(link)
  expect(onItemClickSpy).toHaveBeenCalledTimes(1)
})

import {memo} from 'react'

const Email = memo(({
  value,
  onChange
}) => {
  return (
    <div className="w-full">
      <input
        type="email"
        name="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 box-border" placeholder="name@company.com"
        required="required"
        value={value}
        onChange={onChange}
      />
    </div>
  )
})

export default Email

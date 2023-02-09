import { useState, memo, useCallback } from 'react'

const Password = memo(({
  value,
  onChange
}) => {
  const [flg, setFlg] = useState(false)
  const passSecret = (text) => {
    const textLength = text.length
    const hideText = '*'
    return hideText.repeat(textLength)
  }
  const handleChange = (event) => {
    onChange(event)
  }
  const handleFlgChange = useCallback(() => {
    setFlg(!flg)
  }, [flg])
  return (
    <>
      <div>
        {
          flg ?
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 box-content"
              required="required"
              defaultValue={value}
              onChange={handleChange}
            />
            :
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 box-border"
              required="required"
              defaultValue={passSecret(value)}
              onChange={handleChange}
            />
        }
      </div>
      <div>
        <button
          className="mt-4"
          onClick={handleFlgChange}
          type="button"
        >
          パスワードを表示
        </button>
      </div>
    </>
  )
})

export default Password

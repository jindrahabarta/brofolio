import { redirect } from 'next/navigation'

const NotFoundPage = () => {
    return redirect('/page-not-found')
}
export default NotFoundPage

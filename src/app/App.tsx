import './styles/index.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'


const App = () => {

    return (
        <Suspense fallback="">
            <div className={'app'}>
                <Header />
                <main className='content-page'>
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </Suspense>
    )
}

export default App
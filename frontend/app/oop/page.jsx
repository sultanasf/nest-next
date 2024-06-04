import Image from 'next/image'
import React from 'react'

const OOP = () => {

    return (
        <>
            <div className='py-4'>
                <h1 className='font-extrabold text-center mb-2'>Apa itu OOP?</h1>
                <p className='text-center'>
                    OOP adalah suatu paradigma dalam pemrograman yang mana menganggap segala sesuatu nya adalah objek yang memiliki atribut(field) dan behaviour(method). Dalam software development, OOP penting untuk diterapkan karena maintainability, reusability, serta scalability dari kode yang dihasilkan menjadi lebih baik.
                </p>
                <Image
                    className='mx-auto'
                    alt='OOP'
                    src='/oop.png'
                    width={500}
                    height={500}
                />
                <p className='text-center'>
                    Kode diatas adalah contoh dari penerapan OOP. Kode diatas adalah suatu class(blueprint dari object) AppController yang didalamnya memiliki field bertipe AppService dengan modifier private
                </p>
            </div>
            <div className='py-4'>
                <h1 className='font-extrabold text-center mb-2'>Apa itu encapsulation, inheritance, polymorphism?</h1>
                <p className='text-center'>
                    Encapsulation adalah suatu konsep dimana field dan method yang ada didalam suatu class memiliki modifier private sehingga hanya bisa diakses oleh class itu sendiri. Inheritance adalah suatu konsep dimana class dapat mewarisi field dan method dari class lain. Polymorphism adalah suatu konsep dimana class dapat memiliki method yang sama namun berbeda implementasi.
                </p>
                <div className='flex'>
                    <Image
                        className='mx-auto'
                        alt='OOP'
                        src='/encapsulation.png'
                        width={350}
                        height={350}
                    />
                    <Image
                        className='mx-auto'
                        alt='OOP'
                        src='/inheritance.png'
                        width={350}
                        height={350}
                    />
                    <Image
                        className='mx-auto'
                        alt='OOP'
                        src='/polymorphism.png'
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </>
    )
}

export default OOP
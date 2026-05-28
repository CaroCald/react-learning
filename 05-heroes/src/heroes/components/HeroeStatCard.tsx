import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { type PropsWithChildren } from 'react'

interface HeroeStatCardProps extends PropsWithChildren {
    title: string
    icon: React.ReactNode;

}
export const HeroeStatCard = ({ title, icon, children }: HeroeStatCardProps) => {
    return (

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

"use client"
import { Typography, Card, CardContent, List, ListItem, Divider, ListItemIcon, ListItemText, ListItemButton } from "@mui/material"
import { Phone, Email, LocationOn, Facebook, X, Instagram } from "@mui/icons-material"
import CopyRight from "@components/components/ui/CopyRight"
import Link from "next/link"
import {socialLinks} from "@components/lib/socialLinks"
import {contactInfo} from "@components/lib/contactInfo"
import {programs} from "@components/lib/CardLinks"

export default function Footer() {
    return (
        <>
            <div className="bg-[#ADD8E6] py-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <Typography variant="h5" className="font-bold mb-4" color="primary">
                                ABOUT UJAMAA
                            </Typography>
                            <Typography variant="body1" className="text-gray-700">
                                Ujamaa Foundation is a <strong>not for profit</strong>, Community based, 
                                <strong> non governmental Youth</strong> led organization registered in 
                                the department of social development, <strong>Wajir County in 2022</strong>.
                                <br /><br />
                                Ujamaa Foundation works with established youth groups and women groups 
                                in the six sub counties in empowering the community on development issues, 
                                Quality Education, Health, environmental protection and climate change 
                                mitigation and Peace justice and strong institutions.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <Typography variant="h5" className="font-bold mb-4" color="primary">
                                OUR KEY PROGRAMS
                            </Typography>
                            <List>
                                {programs.map((program, index) => (
                                    <div key={index}>
                                        <ListItemButton component={Link} href={program.link} className="hover:bg-gray-100">
                                            <ListItemText 
                                                primary={program.title}
                                                className="text-gray-700"
                                            />
                                        </ListItemButton>
                                        {index < programs.length - 1 && <Divider />}
                                    </div>
                                ))}
                            </List>
                        </CardContent>
                    </Card>

                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                            <Typography variant="h5" className="font-bold mb-4" color="primary">
                                CONTACT INFORMATION
                            </Typography>
                            <List>
                                {contactInfo.map((contact, index) => (
                                    <div key={index}>
                                        <ListItemButton className="hover:bg-gray-100">
                                            <ListItemIcon>{contact.icon}</ListItemIcon>
                                            <ListItemText
                                                primary={contact.text}
                                                secondary={contact.label}
                                                className="text-gray-700"
                                            />
                                        </ListItemButton>
                                        {index < contactInfo.length - 1 && <Divider />}
                                    </div>
                                ))}
                            </List>
                            <div className="flex justify-center gap-4 mt-4">
                                {socialLinks.map((social, index) => (
                                    <Link 
                                        key={index} 
                                        href={social.url}
                                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <CopyRight />
        </>
    )
}
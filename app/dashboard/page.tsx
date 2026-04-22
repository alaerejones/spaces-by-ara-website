'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LogOut, Search, Download, ChevronDown, Plus, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@supabase/supabase-js'

// Password prompt component
function PasswordPrompt({
  onSuccess,
  onError,
}: {
  onSuccess: () => void
  onError: () => void
}) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isChecking, setIsChecking] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsChecking(true)
    setError('')

    try {
      const correctPassword = process.env.NEXT_PUBLIC_DASHBOARD_PASSWORD || 'admin'
      if (password === correctPassword) {
        sessionStorage.setItem('dashboardAuth', 'true')
        onSuccess()
      } else {
        setError('Incorrect password. Please try again.')
        onError()
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsChecking(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-olive/10 via-transparent to-accent-lime/10 dark:from-dark-green dark:via-background dark:to-dark-green flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Admin Dashboard</CardTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Enter password to access
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter dashboard password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isChecking}
                autoFocus
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && (
              <div className="text-sm text-red-500 bg-red-50 dark:bg-red-950 p-2 rounded">
                {error}
              </div>
            )}
            <Button
              type="submit"
              disabled={isChecking || !password}
              className="w-full bg-olive hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
            >
              {isChecking ? 'Checking...' : 'Access Dashboard'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Mock data - Replace with real Supabase data
const mockEnquiries = [
  {
    id: 1,
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    full_name: 'John Doe',
    whatsapp: '+234 812 345 6789',
    email: 'john@example.com',
    enquiry_type: 'Viewing Request',
    property: 'Standard Room',
    timeline: 'ASAP',
    message: 'Interested in viewing',
    contacted: false,
    notes: '',
    priority: 'high',
  },
  {
    id: 2,
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    full_name: 'Jane Smith',
    whatsapp: '+234 902 345 6789',
    email: 'jane@example.com',
    enquiry_type: 'Investment',
    property: 'Portfolio Inquiry',
    timeline: '2 weeks',
    message: 'Looking for investment opportunities',
    contacted: true,
    notes: 'Sent brochure',
    priority: 'high',
  },
  {
    id: 3,
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    full_name: 'Ahmed Hassan',
    whatsapp: '+234 701 345 6789',
    email: 'ahmed@example.com',
    enquiry_type: 'Property Booking',
    property: 'Premium 2 Bedroom',
    timeline: '1 month',
    message: 'Want to book the apartment',
    contacted: false,
    notes: '',
    priority: 'medium',
  },
]

const waitlist = [
  {
    id: 1,
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    email: 'waitlist1@example.com',
    user_type: 'prospect',
  },
  {
    id: 2,
    created_at: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    email: 'waitlist2@example.com',
    user_type: 'investor',
  },
]

interface Enquiry {
  id: number
  created_at: string
  full_name: string
  whatsapp: string
  email: string
  enquiry_type: string
  property: string
  timeline: string
  message: string
  contacted: boolean
  notes: string
  priority: string
}

function DashboardContent() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
const [waitlist, setWaitlist] = useState<any[]>([])
const [loading, setLoading] = useState(true)

const fetchData = useCallback(async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: enquiryData } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  const { data: waitlistData } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })

  if (enquiryData) setEnquiries(enquiryData)
  if (waitlistData) setWaitlist(waitlistData)
  setLoading(false)
}, [])

useEffect(() => {
  fetchData()
  // Poll every 60 seconds
  const interval = setInterval(fetchData, 60000)
  return () => clearInterval(interval)
}, [fetchData])
  const [selectedTab, setSelectedTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [newNote, setNewNote] = useState('')
  const [contactedFilter, setContactedFilter] = useState<'all' | 'contacted' | 'not-contacted'>('all')

  const filteredEnquiries = enquiries.filter((e) => {
    if (
      searchTerm &&
      !e.full_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !e.email.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !e.whatsapp.includes(searchTerm)
    ) {
      return false
    }

    if (contactedFilter === 'contacted' && !e.contacted) return false
    if (contactedFilter === 'not-contacted' && e.contacted) return false

    if (selectedTab === 'all') return true
    return e.enquiry_type.toLowerCase().includes(selectedTab.toLowerCase())
  })

  const handleMarkContacted = (id: number) => {
    setEnquiries(
      enquiries.map((e) => (e.id === id ? { ...e, contacted: !e.contacted } : e))
    )
  }

  const handleAddNote = (id: number) => {
    if (newNote.trim()) {
      setEnquiries(
        enquiries.map((e) =>
          e.id === id ? { ...e, notes: newNote } : e
        )
      )
      setNewNote('')
    }
  }

  const stats = {
    totalEnquiries: enquiries.length,
    notContacted: enquiries.filter((e) => !e.contacted).length,
    newToday: enquiries.filter(
      (e) => new Date(e.created_at) > new Date(Date.now() - 24 * 60 * 60 * 1000)
    ).length,
    byType: {
      viewing: enquiries.filter((e) => e.enquiry_type.includes('Viewing')).length,
      investment: enquiries.filter((e) => e.enquiry_type.includes('Investment')).length,
      booking: enquiries.filter((e) => e.enquiry_type.includes('Booking')).length,
    },
  }

  const handleExportCSV = () => {
    const headers = ['Date', 'Name', 'WhatsApp', 'Email', 'Type', 'Property', 'Status']
    const rows = enquiries.map((e) => [
      new Date(e.created_at).toLocaleDateString(),
      e.full_name,
      e.whatsapp,
      e.email,
      e.enquiry_type,
      e.property,
      e.contacted ? 'Contacted' : 'Pending',
    ])

    const csv = [headers, ...rows].map((row) => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `enquiries-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-olive dark:bg-dark-green text-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Spaces by Ara — Admin</h1>
          <Button
            onClick={() => {
              sessionStorage.removeItem('dashboardAuth')
              window.location.reload()
            }}
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-olive dark:text-accent-lime">
                {stats.totalEnquiries}
              </div>
              <p className="text-sm text-muted-foreground">Total Enquiries</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-red-500">
                {stats.notContacted}
              </div>
              <p className="text-sm text-muted-foreground">Not Contacted</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-500">
                {stats.newToday}
              </div>
              <p className="text-sm text-muted-foreground">New Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-1 text-sm">
                <div>
                  <span className="font-semibold">{stats.byType.viewing}</span>{' '}
                  <span className="text-muted-foreground">Viewing</span>
                </div>
                <div>
                  <span className="font-semibold">{stats.byType.investment}</span>{' '}
                  <span className="text-muted-foreground">Investment</span>
                </div>
                <div>
                  <span className="font-semibold">{stats.byType.booking}</span>{' '}
                  <span className="text-muted-foreground">Booking</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or WhatsApp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={contactedFilter}
            onChange={(e) =>
              setContactedFilter(e.target.value as 'all' | 'contacted' | 'not-contacted')
            }
            className="px-4 py-2 border rounded-md dark:bg-dark-green dark:border-border"
          >
            <option value="all">All Status</option>
            <option value="contacted">Contacted</option>
            <option value="not-contacted">Not Contacted</option>
          </select>
          <Button
            onClick={handleExportCSV}
            variant="outline"
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="viewing">Viewing</TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
            <TabsTrigger value="booking">Bookings</TabsTrigger>
            <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {filteredEnquiries.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No enquiries found
              </Card>
            ) : (
              filteredEnquiries.map((enquiry) => (
                <Card key={enquiry.id}>
                  <div
                    className="p-4 sm:p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() =>
                      setExpandedId(expandedId === enquiry.id ? null : enquiry.id)
                    }
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <h3 className="font-semibold">{enquiry.full_name}</h3>
                          <Badge
                            variant={enquiry.contacted ? 'secondary' : 'destructive'}
                          >
                            {enquiry.contacted ? 'Contacted' : 'Pending'}
                          </Badge>
                          <Badge variant="outline">{enquiry.enquiry_type}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>📧 {enquiry.email}</div>
                          <div>📱 {enquiry.whatsapp}</div>
                          <div>🏠 {enquiry.property}</div>
                          <div className="text-xs">
                            {new Date(enquiry.created_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </div>
                        </div>
                      </div>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 text-muted-foreground transition-transform flex-shrink-0',
                          expandedId === enquiry.id && 'rotate-180'
                        )}
                      />
                    </div>

                    {expandedId === enquiry.id && (
                      <div className="mt-6 pt-6 border-t space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Message</h4>
                          <p className="text-sm text-muted-foreground">
                            {enquiry.message}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Timeline:</span>{' '}
                            {enquiry.timeline}
                          </div>
                          <div>
                            <span className="font-semibold">Priority:</span>{' '}
                            {enquiry.priority.charAt(0).toUpperCase() +
                              enquiry.priority.slice(1)}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Notes</h4>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Add a note..."
                              value={newNote}
                              onChange={(e) => setNewNote(e.target.value)}
                              className="text-sm"
                            />
                            <Button
                              onClick={() => handleAddNote(enquiry.id)}
                              size="sm"
                              className="bg-olive dark:bg-accent-lime dark:text-dark-green"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          {enquiry.notes && (
                            <p className="text-sm bg-muted p-2 rounded mt-2">
                              {enquiry.notes}
                            </p>
                          )}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button
                            onClick={() => handleMarkContacted(enquiry.id)}
                            className="flex-1 bg-olive dark:bg-accent-lime dark:text-dark-green"
                          >
                            {enquiry.contacted ? 'Mark as Pending' : 'Mark as Contacted'}
                          </Button>
                          <a
                            href={`https://wa.me/${enquiry.whatsapp.replace(/[^\d]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" className="w-full">
                              WhatsApp
                            </Button>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="viewing" className="space-y-4">
            {filteredEnquiries.filter((e) => e.enquiry_type.includes('Viewing')).length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No viewing requests
              </Card>
            ) : (
              filteredEnquiries
                .filter((e) => e.enquiry_type.includes('Viewing'))
                .map((enquiry) => (
                  <Card key={enquiry.id} className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{enquiry.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                        <p className="text-sm text-muted-foreground">{enquiry.whatsapp}</p>
                      </div>
                      <Badge variant={enquiry.contacted ? 'secondary' : 'destructive'}>
                        {enquiry.contacted ? 'Contacted' : 'Pending'}
                      </Badge>
                    </div>
                  </Card>
                ))
            )}
          </TabsContent>

          <TabsContent value="investment" className="space-y-4">
            {filteredEnquiries.filter((e) => e.enquiry_type.includes('Investment')).length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No investment enquiries
              </Card>
            ) : (
              filteredEnquiries
                .filter((e) => e.enquiry_type.includes('Investment'))
                .map((enquiry) => (
                  <Card key={enquiry.id} className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{enquiry.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                        <p className="text-sm text-muted-foreground">{enquiry.whatsapp}</p>
                      </div>
                      <Badge variant={enquiry.contacted ? 'secondary' : 'destructive'}>
                        {enquiry.contacted ? 'Contacted' : 'Pending'}
                      </Badge>
                    </div>
                  </Card>
                ))
            )}
          </TabsContent>

          <TabsContent value="booking" className="space-y-4">
            {filteredEnquiries.filter((e) => e.enquiry_type.includes('Booking')).length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No booking requests
              </Card>
            ) : (
              filteredEnquiries
                .filter((e) => e.enquiry_type.includes('Booking'))
                .map((enquiry) => (
                  <Card key={enquiry.id} className="p-4 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold">{enquiry.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{enquiry.email}</p>
                        <p className="text-sm text-muted-foreground">{enquiry.whatsapp}</p>
                      </div>
                      <Badge variant={enquiry.contacted ? 'secondary' : 'destructive'}>
                        {enquiry.contacted ? 'Contacted' : 'Pending'}
                      </Badge>
                    </div>
                  </Card>
                ))
            )}
          </TabsContent>

          <TabsContent value="waitlist" className="space-y-4">
            {waitlist.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground">
                No waitlist signups
              </Card>
            ) : (
              waitlist.map((item) => (
                <Card key={item.id} className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{item.email}</p>
                      <p className="text-sm text-muted-foreground">
                        Joined{' '}
                        {new Date(item.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <Badge variant="outline">
                      {item.user_type.charAt(0).toUpperCase() + item.user_type.slice(1)}
                    </Badge>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('dashboardAuth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <PasswordPrompt
        onSuccess={() => setIsAuthenticated(true)}
        onError={() => {}}
      />
    )
  }

  return <DashboardContent />
}

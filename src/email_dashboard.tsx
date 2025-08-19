import React, { useState, useEffect } from 'react';
import { Mail, Shield, AlertTriangle, FileText, Clock, TrendingUp, Users, DollarSign, Activity, CheckCircle, XCircle, ArrowRight, Zap, Target, Globe, Database, Cpu, Eye, Star, Award, Bell, Filter, Search, Download, RefreshCw, BarChart3, BarChart as LucideBarChart, TrendingDown, AlertCircle, Calendar, MapPin } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Tooltip, Legend, AreaChart, Area, RadialBarChart, RadialBar, ScatterChart, Scatter, ComposedChart } from 'recharts';

const EmailDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedValues, setAnimatedValues] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate counter values
    const targets = { emails: 30, attachments: 6, tickets: 7, security: 3 };
    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / 30;
      const counter = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(counter);
        }
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });
  }, []);

  // Source data from the daily email analysis report
  const emailCategories = [
    { name: 'OTP/Authentication', count: 13, percentage: 43.3, color: '#3B82F6', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Support/Tickets', count: 7, percentage: 23.3, color: '#10B981', gradient: 'from-green-500 to-green-700' },
    { name: 'Business/Commercial', count: 6, percentage: 20.0, color: '#F59E0B', gradient: 'from-yellow-500 to-orange-600' },
    { name: 'Security/Access', count: 3, percentage: 10.0, color: '#EF4444', gradient: 'from-red-500 to-red-700' },
    { name: 'Other', count: 1, percentage: 3.3, color: '#8B5CF6', gradient: 'from-purple-500 to-purple-700' }
  ];

  const hourlyActivity = [
    { hour: '03:00', emails: 3, otp: 0, business: 2, support: 1 },
    { hour: '04:00', emails: 2, otp: 0, business: 1, support: 1 },
    { hour: '05:00', emails: 4, otp: 0, business: 0, support: 4 },
    { hour: '12:00', emails: 4, otp: 1, business: 3, support: 0 },
    { hour: '13:00', emails: 3, otp: 0, business: 2, support: 1 },
    { hour: '14:00', emails: 5, otp: 2, business: 3, support: 0 },
    { hour: '17:00', emails: 4, otp: 3, business: 1, support: 0 },
    { hour: '18:00', emails: 5, otp: 7, business: 0, support: 0 }
  ];

  const domainMetrics = [
    { domain: 'tatasteel.com', count: 22, percentage: 73.3, responseTime: 2.5, priority: 'high', color: '#3B82F6', purpose: 'Corporate Communications, OTP Support' },
    { domain: 'rediffmail.com', count: 2, percentage: 6.7, responseTime: 1.2, priority: 'medium', color: '#10B981', purpose: 'Business Enquiries - Shiv Bhardwaj' },
    { domain: 'sail.in', count: 1, percentage: 3.3, responseTime: 4.1, priority: 'high', color: '#F59E0B', purpose: 'BSP-eProcurement RFQ' },
    { domain: 'gmail.com', count: 1, percentage: 3.3, responseTime: 0.8, priority: 'low', color: '#8B5CF6', purpose: 'Visitor Gate Pass' },
    { domain: 'partners.tatasteel.com', count: 1, percentage: 3.3, responseTime: 3.2, priority: 'medium', color: '#EF4444', purpose: 'RFQ Follow-up' }
  ];

  const performanceMetrics = [
    { metric: 'Email Processing Speed', value: 95, max: 100, color: '#10B981' },
    { metric: 'Response Rate', value: 87, max: 100, color: '#3B82F6' },
    { metric: 'Security Compliance', value: 98, max: 100, color: '#F59E0B' },
    { metric: 'Attachment Processing', value: 92, max: 100, color: '#8B5CF6' }
  ];

  const attachmentData = [
    { type: 'PDF', count: 3, size: 515.4, color: '#EF4444', description: 'Registration Certificates, Gate Pass' },
    { type: 'Excel', count: 1, size: 12.0, color: '#10B981', description: 'Quotation Spreadsheet' },
    { type: 'Images', count: 2, size: 12300, color: '#3B82F6', description: 'Technical Specification Photos' }
  ];

  const businessItems = [
    { id: '1715', contact: 'Shiv Bhardwaj (S.R Electricals)', time: '14:19 & 13:14 IST', status: 'Quotation Exchange Ongoing', priority: 'high', action: 'GST number and address requested' },
    { id: '2100949285', contact: 'Atish Kumar (Tata Steel)', time: '12:42-13:02', status: 'Carbon Brushes Order', priority: 'high', action: 'Confirm pigtail specifications' },
    { id: '8000048890', contact: 'SAIL BSP-eProcurement', time: '18:26 IST', status: 'RFQ - Press Pan & Empire Tape', priority: 'urgent', action: 'Deadline: Aug 29, 2025, 15:00' }
  ];

  const supportTickets = [
    { id: 'ICRM0326768', status: 'Resolved', time: '05:20', priority: 'low' },
    { id: 'ICRM0327388', status: 'In Progress', time: '05:02-05:15', priority: 'medium' },
    { id: 'ICRM0327286', status: 'In Progress', time: '04:39', priority: 'medium' },
    { id: 'ICRM0327249', status: 'In Progress', time: '03:27', priority: 'high' },
    { id: 'ICRM0323526', status: 'Resolved', time: '03:04', priority: 'low' }
  ];

  const securityAlerts = [
    { type: 'Fake E-challan Warning', source: 'HDFC Bank', time: '17:46 IST', severity: 'high' },
    { type: 'Safety Pass Expiry Alert', expires: 'August 26, 2025', time: '17:13 IST', severity: 'medium' }
  ];

  const weeklyTrend = [
    { day: 'Mon', emails: 25, business: 8, support: 5, otp: 12 },
    { day: 'Tue', emails: 30, business: 6, support: 7, otp: 13 },
    { day: 'Wed', emails: 28, business: 9, support: 4, otp: 15 },
    { day: 'Thu', emails: 32, business: 7, support: 6, otp: 19 },
    { day: 'Fri', emails: 35, business: 12, support: 3, otp: 20 },
    { day: 'Sat', emails: 8, business: 2, support: 1, otp: 5 },
    { day: 'Sun', emails: 5, business: 1, support: 0, otp: 4 }
  ];

  const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let start = 0;
      const end = parseInt(target);
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}{suffix}</span>;
  };

  const GlowingCard = ({ children, className = "" }) => (
    <div className={`bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );

  const PulsingDot = ({ color = "blue" }) => {
    const colorClasses = {
      blue: 'bg-blue-400',
      green: 'bg-green-400',
      purple: 'bg-purple-400',
      red: 'bg-red-400',
      yellow: 'bg-yellow-400'
    };
    
    return (
      <div className="relative">
        <div className={`h-3 w-3 ${colorClasses[color]} rounded-full animate-pulse`}></div>
        <div className={`absolute inset-0 h-3 w-3 ${colorClasses[color]} rounded-full animate-ping`}></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Epic Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="h-16 w-16 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl flex items-center justify-center animate-pulse">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                  <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-4 animate-pulse">
              PRECISION SPARES
            </h1>
            <h2 className="text-2xl font-bold text-gray-300 mb-2">ULTIMATE EMAIL ANALYTICS COMMAND CENTER</h2>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Tuesday, August 19, 2025</span>
              <MapPin className="h-4 w-4" />
              <span>Asia/Kolkata</span>
              <Clock className="h-4 w-4" />
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Mega Stats Bar */}
          <div className="mb-8">
            <GlowingCard className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-400 mb-1">
                    <AnimatedCounter target={30} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Total Emails</div>
                  <div className="text-xs text-blue-400">Today</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red-400 mb-1">113</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Unread</div>
                  <div className="text-xs text-red-400">Inbox</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400 mb-1">
                    <AnimatedCounter target={6} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Attachments</div>
                  <div className="text-xs text-yellow-400">Files</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-400 mb-1">12.81</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">MB Size</div>
                  <div className="text-xs text-purple-400">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-400 mb-1">
                    <AnimatedCounter target={7} />
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">ICRM Tickets</div>
                  <div className="text-xs text-green-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-1">73%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Tata Steel</div>
                  <div className="text-xs text-cyan-400">Dominance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-orange-400 mb-1">13</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">OTP Requests</div>
                  <div className="text-xs text-orange-400">Auth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-pink-400 mb-1">95%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Efficiency</div>
                  <div className="text-xs text-pink-400">Rate</div>
                </div>
              </div>
            </GlowingCard>
          </div>

          {/* Epic Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 p-2 rounded-2xl border border-gray-800 shadow-2xl">
              <div className="flex flex-wrap justify-center space-x-2">
                {[
                  { id: 'overview', label: '🏠 COMMAND CENTER', icon: BarChart3 },
                  { id: 'business', label: '💼 BUSINESS OPS', icon: DollarSign },
                  { id: 'realtime', label: '⚡ REAL-TIME', icon: Zap },
                  { id: 'analytics', label: '📊 DEEP ANALYTICS', icon: TrendingUp },
                  { id: 'security', label: '🛡️ SECURITY HUB', icon: Shield }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 flex items-center space-x-2 ${
                      activeTab === tab.id 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-400 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* COMMAND CENTER - Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Mega Performance Ring */}
              <GlowingCard className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-black text-blue-400 mb-6 flex items-center">
                      <Award className="h-8 w-8 mr-3" />
                      PERFORMANCE MATRIX
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={performanceMetrics}>
                        <RadialBar
                          label={{ position: 'insideStart', fill: '#fff' }}
                          background={{ fill: '#374151' }}
                          dataKey="value"
                          fill="#3B82F6"
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#111827', 
                            border: '1px solid #3B82F6',
                            borderRadius: '12px',
                            color: '#E5E7EB'
                          }} 
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-black text-purple-400 mb-6 flex items-center">
                      <BarChart className="h-8 w-8 mr-3" />
                      EMAIL DISTRIBUTION VORTEX
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={emailCategories}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          innerRadius={60}
                          fill="#8884d8"
                          dataKey="count"
                          label={({ name, percentage }) => `${percentage}%`}
                          labelLine={false}
                        >
                          {emailCategories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#111827', 
                            border: '1px solid #8B5CF6',
                            borderRadius: '12px',
                            color: '#E5E7EB'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </GlowingCard>

              {/* Real-time Activity Stream */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-green-400 mb-6 flex items-center">
                  <Activity className="h-8 w-8 mr-3" />
                  24-HOUR ACTIVITY PULSE
                </h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={hourlyActivity}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="hour" tick={{ fill: '#9CA3AF' }} />
                    <YAxis tick={{ fill: '#9CA3AF' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #10B981',
                        borderRadius: '12px',
                        color: '#E5E7EB'
                      }} 
                    />
                    <Legend />
                    <Area type="monotone" dataKey="emails" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} name="Total Emails" />
                    <Bar dataKey="business" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Business" />
                    <Line type="monotone" dataKey="otp" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', strokeWidth: 2, r: 6 }} name="OTP Requests" />
                  </ComposedChart>
                </ResponsiveContainer>
              </GlowingCard>

              {/* Domain Dominance Matrix */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6 flex items-center">
                  <Globe className="h-8 w-8 mr-3" />
                  DOMAIN DOMINANCE MATRIX
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {domainMetrics.map((domain, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:scale-105 transform transition-all duration-300 hover:border-yellow-500">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-4 w-4 rounded-full animate-pulse`} style={{ backgroundColor: domain.color }}></div>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          domain.priority === 'high' ? 'bg-red-500 text-red-100' :
                          domain.priority === 'medium' ? 'bg-yellow-500 text-yellow-100' :
                          'bg-green-500 text-green-100'
                        }`}>
                          {domain.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-white font-bold text-lg mb-2">{domain.domain}</div>
                      <div className="text-gray-400 text-sm mb-4">{domain.purpose}</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Count:</span>
                          <span className="text-white font-bold">{domain.count}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Share:</span>
                          <span className="text-blue-400 font-bold">{domain.percentage}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Response:</span>
                          <span className="text-green-400 font-bold">{domain.responseTime}h</span>
                        </div>
                      </div>
                      <div className="mt-4 w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${domain.percentage}%`, 
                            backgroundColor: domain.color 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </div>
          )}

          {/* BUSINESS OPS Tab */}
          {activeTab === 'business' && (
            <div className="space-y-8">
              {/* Critical Business Communications */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-green-400 mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  CRITICAL BUSINESS COMMUNICATIONS
                </h3>
                <div className="space-y-4">
                  {businessItems.map((item, index) => (
                    <div key={index} className={`bg-gray-800 border-2 rounded-xl p-6 transition-all duration-300 hover:scale-102 ${
                      item.priority === 'urgent' ? 'border-red-500 bg-red-900/20' :
                      item.priority === 'high' ? 'border-yellow-500 bg-yellow-900/20' :
                      'border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`h-3 w-3 rounded-full ${
                            item.priority === 'urgent' ? 'bg-red-500 animate-ping' :
                            item.priority === 'high' ? 'bg-yellow-500 animate-pulse' :
                            'bg-green-500'
                          }`}></div>
                          <div className="text-xl font-bold text-white">#{item.id}</div>
                          <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                            item.priority === 'urgent' ? 'bg-red-500 text-red-100' :
                            item.priority === 'high' ? 'bg-yellow-500 text-yellow-100' :
                            'bg-green-500 text-green-100'
                          }`}>
                            {item.priority.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-gray-400 text-sm">{item.time}</div>
                      </div>
                      <div className="text-blue-400 font-bold text-lg mb-2">{item.contact}</div>
                      <div className="text-gray-300 mb-3">{item.status}</div>
                      <div className="bg-gray-700 rounded-lg p-3 border-l-4 border-blue-500">
                        <div className="text-white font-semibold">Action Required:</div>
                        <div className="text-gray-300">{item.action}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>

              {/* Support Tickets Matrix */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-purple-400 mb-6 flex items-center">
                  <FileText className="h-8 w-8 mr-3" />
                  ICRM SUPPORT TICKETS MATRIX
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {supportTickets.map((ticket, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-lg font-bold text-white">{ticket.id}</div>
                        {ticket.status === 'Resolved' ? 
                          <CheckCircle className="h-6 w-6 text-green-400" /> :
                          <Clock className="h-6 w-6 text-yellow-400 animate-spin" />
                        }
                      </div>
                      <div className={`text-sm font-bold mb-2 ${
                        ticket.status === 'Resolved' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {ticket.status.toUpperCase()}
                      </div>
                      <div className="text-gray-400 text-sm mb-3">{ticket.time} IST</div>
                      <div className={`h-2 w-full rounded-full ${
                        ticket.status === 'Resolved' ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </div>
          )}

          {/* REAL-TIME Tab */}
          {activeTab === 'realtime' && (
            <div className="space-y-8">
              {/* Live Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlowingCard className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700"></div>
                  <div className="flex items-center justify-between mb-4">
                    <Zap className="h-8 w-8 text-blue-400" />
                    <PulsingDot color="blue" />
                  </div>
                  <div className="text-3xl font-black text-blue-400 mb-2">LIVE</div>
                  <div className="text-gray-300">System Status</div>
                  <div className="text-green-400 font-bold">🟢 OPERATIONAL</div>
                </GlowingCard>

                <GlowingCard className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-green-500 to-green-700"></div>
                  <div className="flex items-center justify-between mb-4">
                    <Activity className="h-8 w-8 text-green-400" />
                    <PulsingDot color="green" />
                  </div>
                  <div className="text-3xl font-black text-green-400 mb-2">
                    <AnimatedCounter target={95} suffix="%" />
                  </div>
                  <div className="text-gray-300">Processing Rate</div>
                  <div className="text-green-400 font-bold">↗️ OPTIMAL</div>
                </GlowingCard>

                <GlowingCard className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-purple-500 to-purple-700"></div>
                  <div className="flex items-center justify-between mb-4">
                    <Eye className="h-8 w-8 text-purple-400" />
                    <PulsingDot color="purple" />
                  </div>
                  <div className="text-3xl font-black text-purple-400 mb-2">ACTIVE</div>
                  <div className="text-gray-300">Monitoring</div>
                  <div className="text-purple-400 font-bold">👁️ WATCHING</div>
                </GlowingCard>
              </div>

              {/* Attachment Analysis Tornado */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-cyan-400 mb-6 flex items-center">
                  <Database className="h-8 w-8 mr-3" />
                  ATTACHMENT ANALYSIS TORNADO
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {attachmentData.map((attachment, index) => (
                    <div key={index} className="relative">
                      <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all duration-300 transform hover:scale-105">
                        <div className="text-center">
                          <div className="text-5xl mb-4">
                            {attachment.type === 'PDF' ? '📄' : attachment.type === 'Excel' ? '📊' : '🖼️'}
                          </div>
                          <div className="text-2xl font-black text-white mb-2">{attachment.count}</div>
                          <div className="text-cyan-400 font-bold">{attachment.type}</div>
                          <div className="text-gray-400 text-sm mb-2">
                            {attachment.size > 1000 ? `${(attachment.size/1000).toFixed(1)} MB` : `${attachment.size} KB`}
                          </div>
                          <div className="text-gray-500 text-xs">{attachment.description}</div>
                        </div>
                        <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
                          <div 
                            className="h-3 rounded-full transition-all duration-1000 bg-gradient-to-r from-cyan-500 to-blue-500"
                            style={{ width: `${(attachment.count / 6) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlowingCard>

              {/* Weekly Trend Explosion */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-orange-400 mb-6 flex items-center">
                  <TrendingUp className="h-8 w-8 mr-3" />
                  WEEKLY TREND EXPLOSION
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={weeklyTrend}>
                    <defs>
                      <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="businessGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" tick={{ fill: '#9CA3AF' }} />
                    <YAxis tick={{ fill: '#9CA3AF' }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '2px solid #F59E0B',
                        borderRadius: '12px',
                        color: '#E5E7EB'
                      }} 
                    />
                    <Area type="monotone" dataKey="emails" stackId="1" stroke="#3B82F6" fill="url(#emailGradient)" strokeWidth={3} name="Total Emails" />
                    <Area type="monotone" dataKey="business" stackId="1" stroke="#F59E0B" fill="url(#businessGradient)" strokeWidth={3} name="Business" />
                    <Line type="monotone" dataKey="support" stroke="#10B981" strokeWidth={4} dot={{ fill: '#10B981', strokeWidth: 3, r: 8 }} name="Support" />
                  </AreaChart>
                </ResponsiveContainer>
              </GlowingCard>
            </div>
          )}

          {/* DEEP ANALYTICS Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Advanced Email Flow */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-emerald-400 mb-6 flex items-center">
                  <Cpu className="h-8 w-8 mr-3" />
                  ADVANCED EMAIL FLOW ANALYSIS
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ResponsiveContainer width="100%" height={350}>
                    <ScatterChart data={domainMetrics}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="count" tick={{ fill: '#9CA3AF' }} name="Email Count" />
                      <YAxis dataKey="responseTime" tick={{ fill: '#9CA3AF' }} name="Response Time" />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        contentStyle={{ 
                          backgroundColor: '#111827', 
                          border: '2px solid #10B981',
                          borderRadius: '12px',
                          color: '#E5E7EB'
                        }} 
                      />
                      <Scatter name="Domains" dataKey="count" fill="#10B981" />
                    </ScatterChart>
                  </ResponsiveContainer>

                  <div className="space-y-4">
                    {emailCategories.map((category, index) => (
                      <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-emerald-500 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`h-3 w-3 rounded-full animate-pulse`} style={{ backgroundColor: category.color }}></div>
                          <div className="text-2xl font-black text-white">{category.count}</div>
                        </div>
                        <div className="text-emerald-400 font-bold text-lg mb-2">{category.name}</div>
                        <div className="text-gray-400 text-sm mb-3">{category.percentage}% of total</div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${category.percentage}%`, 
                              backgroundColor: category.color 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowingCard>

              {/* Peak Activity Analysis */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-pink-400 mb-6 flex items-center">
                  <Bell className="h-8 w-8 mr-3" />
                  PEAK ACTIVITY ANALYSIS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border border-blue-600 rounded-xl p-6">
                    <div className="text-blue-400 font-bold text-lg mb-2">Business Peak</div>
                    <div className="text-3xl font-black text-white mb-2">11:49-14:59</div>
                    <div className="text-gray-300 text-sm">Business communications surge</div>
                    <div className="mt-4 flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-bold">+340%</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-600 rounded-xl p-6">
                    <div className="text-red-400 font-bold text-lg mb-2">Security Peak</div>
                    <div className="text-3xl font-black text-white mb-2">17:13-18:56</div>
                    <div className="text-gray-300 text-sm">Evening OTP & alerts</div>
                    <div className="mt-4 flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-red-400" />
                      <span className="text-red-400 font-bold">CRITICAL</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 border border-green-600 rounded-xl p-6">
                    <div className="text-green-400 font-bold text-lg mb-2">System Peak</div>
                    <div className="text-3xl font-black text-white mb-2">03:04-05:20</div>
                    <div className="text-gray-300 text-sm">Automated notifications</div>
                    <div className="mt-4 flex items-center space-x-2">
                      <Cpu className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-bold">AUTO</span>
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
          )}

          {/* SECURITY HUB Tab */}
          {activeTab === 'security' && (
            <div className="space-y-8">
              {/* Security Alerts Dashboard */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-red-400 mb-6 flex items-center">
                  <AlertTriangle className="h-8 w-8 mr-3" />
                  SECURITY ALERTS COMMAND CENTER
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {securityAlerts.map((alert, index) => (
                    <div key={index} className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                      alert.severity === 'high' ? 'bg-red-900/20 border-red-500' : 'bg-yellow-900/20 border-yellow-500'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <AlertCircle className={`h-8 w-8 ${alert.severity === 'high' ? 'text-red-400' : 'text-yellow-400'} animate-pulse`} />
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                          alert.severity === 'high' ? 'bg-red-500 text-red-100' : 'bg-yellow-500 text-yellow-100'
                        }`}>
                          {alert.severity.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-white font-bold text-xl mb-2">{alert.type}</div>
                      <div className="text-gray-300 mb-2">{alert.source || `Expires: ${alert.expires}`}</div>
                      <div className="text-gray-400 text-sm">{alert.time}</div>
                    </div>
                  ))}
                </div>
              </GlowingCard>

              {/* OTP Pattern Analysis */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-blue-400 mb-6 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  OTP PATTERN ANALYSIS
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gray-800 border border-blue-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-blue-400 mb-2">13</div>
                    <div className="text-gray-300 font-bold">Total OTPs</div>
                    <div className="text-blue-400 text-sm">43% of emails</div>
                  </div>
                  
                  <div className="bg-gray-800 border border-orange-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-orange-400 mb-2">17-19</div>
                    <div className="text-gray-300 font-bold">Peak Hours</div>
                    <div className="text-orange-400 text-sm">Evening surge</div>
                  </div>
                  
                  <div className="bg-gray-800 border border-green-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-green-400 mb-2">100%</div>
                    <div className="text-gray-300 font-bold">Success Rate</div>
                    <div className="text-green-400 text-sm">All verified</div>
                  </div>
                  
                  <div className="bg-gray-800 border border-purple-600 rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-purple-400 mb-2">TataSteel</div>
                    <div className="text-gray-300 font-bold">Primary Source</div>
                    <div className="text-purple-400 text-sm">ProCare System</div>
                  </div>
                </div>
              </GlowingCard>

              {/* Action Items Dashboard */}
              <GlowingCard className="p-8">
                <h3 className="text-3xl font-black text-yellow-400 mb-6 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  CRITICAL ACTION ITEMS
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Respond to Enquiry 1715', contact: 'Shiv Bhardwaj', deadline: 'Today', priority: 'urgent', action: 'Provide GST number and complete address' },
                    { title: 'Carbon Brush Specifications Review', contact: 'Atish Kumar', deadline: 'Today', priority: 'high', action: 'Check technical images and confirm pigtail specs' },
                    { title: 'Gate Pass Renewal', contact: 'System', deadline: 'Aug 26, 2025', priority: 'medium', action: 'Submit renewal before expiry' },
                    { title: 'BSP-eProcurement Response', contact: 'SAIL', deadline: 'Aug 29, 2025', priority: 'high', action: 'Prepare and submit quotation by deadline' }
                  ].map((item, index) => (
                    <div key={index} className={`bg-gray-800 border-l-4 rounded-xl p-6 ${
                      item.priority === 'urgent' ? 'border-red-500' :
                      item.priority === 'high' ? 'border-yellow-500' :
                      'border-blue-500'
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xl font-bold text-white">{item.title}</div>
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                          item.priority === 'urgent' ? 'bg-red-500 text-red-100' :
                          item.priority === 'high' ? 'bg-yellow-500 text-yellow-100' :
                          'bg-blue-500 text-blue-100'
                        }`}>
                          {item.priority.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-blue-400 font-bold mb-2">{item.contact}</div>
                      <div className="text-gray-300 mb-2">{item.action}</div>
                      <div className="text-gray-400 text-sm">Deadline: {item.deadline}</div>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailDashboard;
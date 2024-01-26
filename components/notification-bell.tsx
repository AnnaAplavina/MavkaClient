"use client"

import React, { Component } from 'react';
import { Bell } from "lucide-react";

interface Notification {
    text: string;
    read: boolean;
}

interface State {
  notifications: Notification[];
  unreadCount: number;
  isOpen: boolean;
  maxNotifications: number,
}

const items_notif = [
    {
      text: "Уведомление 1",
      read: false,
    },
    {
      text: "Уведомление 2",
      read: false,
    },
    {
      text: "Уведомление 3",
      read: false,
    },
    {
      text: "Уведомление 4",
      read: false,
    },
    {
      text: "Уведомление 5",
      read: false,
    },
    {
      text: "Уведомление 6",
      read: true,
    },
  ]


class NotificationBell extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      notifications: items_notif,
      unreadCount: 5,
      isOpen: false,
      maxNotifications: 5,
    };
  }


  addNotification = (notification: Notification) => {
    this.setState((prevState) => {
        const notifications = [notification, ...prevState.notifications];
        if (notifications.length > prevState.maxNotifications) {
          notifications.pop();
        }
        return {
          notifications,
          unreadCount: prevState.unreadCount + 1,
        };
      });
  };

  markAllAsRead = () => {
    this.setState((prevState) => ({
        unreadCount: 0,
        notifications: prevState.notifications.map((notification) => ({
          ...notification,
          read: true,
        })),
    }));
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
        isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { notifications, unreadCount, isOpen } = this.state;

    return (
      <div className="relative">
        <button onClick={this.toggleDropdown} className='relative'>
          <Bell size={24} className="text-gray-600" /> 
          {unreadCount > 0 && (
            <span className="badge absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              {unreadCount}
            </span>
          )}
        </button>
        {isOpen && (
          <div className="absolute top-10 right-0 w-64 bg-white border border-gray-300 rounded shadow-lg p-2">
            <button onClick={this.markAllAsRead} className="text-blue-600 underline text-sm">Отметить все как прочитанные</button>
            <ul className="mt-2">
              {notifications.map((notification, index) => (
                <li key={index} className={`${notification.read ? 'text-gray-600' : 'text-black'} test-sm`}>
                  {notification.text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export { NotificationBell };

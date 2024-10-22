// Business Rule that runs on Update of specific field or record, currently its written on incident table whic can be replaced by any table
(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var copy = new GlideRecord('problem');
    copy.addQuery('parent', current.getUniqueValue());
    copy.query();
    if (copy.next()) {
        GlideSysAttachment.copy('incident', current.getUniqueValue(), 'problem', copy.getUniqueValue()); // Here the attachment is copied from incident to problem, those table can be changed according to the needs
    }
})(current, previous);
